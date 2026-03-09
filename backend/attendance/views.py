from rest_framework import generics
from .models import AttendanceRecord
from .serializers import AttendanceRecordSerializer
from accounts.permissions import IsAdminOrTeacher, IsParentRole


class AttendanceListCreateView(generics.ListCreateAPIView):
    queryset = AttendanceRecord.objects.all().order_by("-date")
    serializer_class = AttendanceRecordSerializer
    permission_classes = [IsAdminOrTeacher]

    def perform_create(self, serializer):
        serializer.save(marked_by=self.request.user)


class ParentAttendanceView(generics.ListAPIView):
    serializer_class = AttendanceRecordSerializer
    permission_classes = [IsParentRole]

    def get_queryset(self):
        return AttendanceRecord.objects.filter(student__parent=self.request.user).order_by("-date")
