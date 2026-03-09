from rest_framework import generics
from .models import Student
from .serializers import StudentSerializer
from accounts.permissions import IsAdminRole


class StudentListView(generics.ListAPIView):
    queryset = Student.objects.all().order_by("-created_at")
    serializer_class = StudentSerializer
    permission_classes = [IsAdminRole]
