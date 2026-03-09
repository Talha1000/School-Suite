from django.urls import path
from .views import AttendanceListCreateView, ParentAttendanceView

urlpatterns = [
    path("", AttendanceListCreateView.as_view(), name="attendance-list-create"),
    path("parent/", ParentAttendanceView.as_view(), name="parent-attendance"),
]
