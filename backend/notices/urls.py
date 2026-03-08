from django.urls import path
from .views import PublicNoticeListView, AdminNoticeListCreateView

urlpatterns = [
    path("public/", PublicNoticeListView.as_view(), name="public-notices"),
    path("", AdminNoticeListCreateView.as_view(), name="admin-notices"),
]
