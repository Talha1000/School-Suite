from django.urls import path
from .views import (
    AdmissionCreateView,
    AdmissionListView,
    admission_status_lookup,
    admission_update_status,
)

urlpatterns = [
    path("", AdmissionListView.as_view(), name="admission-list"),
    path("apply/", AdmissionCreateView.as_view(), name="admission-create"),
    path("status/<str:application_id>/",
         admission_status_lookup, name="admission-status"),
    path("<int:pk>/status/", admission_update_status,
         name="admission-update-status"),
]
