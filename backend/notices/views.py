from rest_framework import generics
from rest_framework.permissions import AllowAny
from .models import Notice
from .serializers import NoticeSerializer
from accounts.permissions import IsAdminRole


class PublicNoticeListView(generics.ListAPIView):
    queryset = Notice.objects.filter(is_published=True).order_by("-created_at")
    serializer_class = NoticeSerializer
    permission_classes = [AllowAny]


class AdminNoticeListCreateView(generics.ListCreateAPIView):
    queryset = Notice.objects.all().order_by("-created_at")
    serializer_class = NoticeSerializer
    permission_classes = [IsAdminRole]

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)
