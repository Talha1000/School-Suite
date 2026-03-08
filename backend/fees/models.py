from django.db import models
from students.models import Student


class FeeInvoice(models.Model):
    class StatusChoices(models.TextChoices):
        PAID = "PAID", "Paid"
        UNPAID = "UNPAID", "Unpaid"
        PARTIAL = "PARTIAL", "Partial"

    student = models.ForeignKey(
        Student, on_delete=models.CASCADE, related_name="fee_invoices")
    title = models.CharField(max_length=150)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    due_date = models.DateField()
    status = models.CharField(
        max_length=20, choices=StatusChoices.choices, default=StatusChoices.UNPAID)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.student.name} - {self.title}"
