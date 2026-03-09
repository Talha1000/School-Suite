from django.db import models
from accounts.models import User
from students.models import Student


class AttendanceRecord(models.Model):
    class StatusChoices(models.TextChoices):
        PRESENT = "PRESENT", "Present"
        ABSENT = "ABSENT", "Absent"
        LATE = "LATE", "Late"

    student = models.ForeignKey(
        Student, on_delete=models.CASCADE, related_name="attendance_records")
    date = models.DateField()
    status = models.CharField(max_length=20, choices=StatusChoices.choices)
    marked_by = models.ForeignKey(
        User, on_delete=models.SET_NULL, null=True, blank=True, related_name="marked_attendance")
    remarks = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        unique_together = ("student", "date")

    def __str__(self):
        return f"{self.student.name} - {self.date} - {self.status}"
