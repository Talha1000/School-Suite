from rest_framework import generics
from .models import FeeInvoice
from .serializers import FeeInvoiceSerializer
from accounts.permissions import IsAdminRole, IsParentRole


class FeeInvoiceListView(generics.ListAPIView):
    queryset = FeeInvoice.objects.all().order_by("-created_at")
    serializer_class = FeeInvoiceSerializer
    permission_classes = [IsAdminRole]


class ParentFeeInvoiceView(generics.ListAPIView):
    serializer_class = FeeInvoiceSerializer
    permission_classes = [IsParentRole]

    def get_queryset(self):
        return FeeInvoice.objects.filter(student__parent=self.request.user).order_by("-created_at")
