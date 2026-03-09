from django.urls import path
from .views import FeeInvoiceListView, ParentFeeInvoiceView

urlpatterns = [
    path("", FeeInvoiceListView.as_view(), name="fee-list"),
    path("parent/", ParentFeeInvoiceView.as_view(), name="parent-fees"),
]
