from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model
from admissions.models import AdmissionApplication
from students.models import Student
from notices.models import Notice
from attendance.models import AttendanceRecord
from fees.models import FeeInvoice
from datetime import date, timedelta
import random

User = get_user_model()


class Command(BaseCommand):
    help = "Seed demo data for School ERP"

    def handle(self, *args, **kwargs):
        admin_user, _ = User.objects.get_or_create(
            username="admin_demo",
            defaults={
                "email": "admin@datait.com",
                "role": "ADMIN",
                "first_name": "Admin",
                "last_name": "Demo",
            }
        )
        admin_user.set_password("Admin123!")
        admin_user.save()

        teacher_user, _ = User.objects.get_or_create(
            username="teacher_demo",
            defaults={
                "email": "teacher@datait.com",
                "role": "TEACHER",
                "first_name": "Teacher",
                "last_name": "Demo",
            }
        )
        teacher_user.set_password("Teacher123!")
        teacher_user.save()

        parent_user, _ = User.objects.get_or_create(
            username="parent_demo",
            defaults={
                "email": "parent@datait.com",
                "role": "PARENT",
                "first_name": "Parent",
                "last_name": "Demo",
            }
        )
        parent_user.set_password("Parent123!")
        parent_user.save()

        admissions = []
        for i in range(5):
            app, _ = AdmissionApplication.objects.get_or_create(
                phone=f"0170000000{i}",
                defaults={
                    "student_name": f"Student Applicant {i+1}",
                    "class_applying_for": f"Class {random.choice(['1', '2', '3', '4', '5'])}",
                    "parent_name": f"Parent {i+1}",
                    "email": f"parent{i+1}@mail.com",
                    "address": f"Demo Address {i+1}",
                    "status": random.choice(["PENDING", "APPROVED"]),
                }
            )
            admissions.append(app)

        students = []
        for i in range(3):
            student, _ = Student.objects.get_or_create(
                student_id=f"STD-100{i+1}",
                defaults={
                    "name": f"Demo Student {i+1}",
                    "student_class": f"Class {i+1}",
                    "section": "A",
                    "parent": parent_user,
                    "admission": admissions[i] if i < len(admissions) else None,
                }
            )
            students.append(student)

        for i in range(3):
            Notice.objects.get_or_create(
                title=f"School Notice {i+1}",
                defaults={
                    "content": f"This is demo notice content {i+1}.",
                    "is_published": True,
                    "created_by": admin_user
                }
            )

        for student in students:
            for d in range(10):
                AttendanceRecord.objects.get_or_create(
                    student=student,
                    date=date.today() - timedelta(days=d),
                    defaults={
                        "status": random.choice(["PRESENT", "ABSENT", "LATE"]),
                        "marked_by": teacher_user,
                        "remarks": "Demo attendance"
                    }
                )

        for student in students:
            FeeInvoice.objects.get_or_create(
                student=student,
                title="Monthly Tuition Fee",
                defaults={
                    "amount": 5000.00,
                    "due_date": date.today() + timedelta(days=7),
                    "status": random.choice(["PAID", "UNPAID", "PARTIAL"]),
                }
            )

        self.stdout.write(self.style.SUCCESS("Demo data seeded successfully"))
        self.stdout.write("Demo credentials:")
        self.stdout.write("Admin: admin_demo / Admin123!")
        self.stdout.write("Teacher: teacher_demo / Teacher123!")
        self.stdout.write("Parent: parent_demo / Parent123!")
