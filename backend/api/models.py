from django.db import models
from django.utils import timezone

# Create your models here.


class Contact(models.Model):
   name = models.CharField(max_length=100)
   address = models.CharField(max_length=100)
   phone = models.CharField(max_length=100)
   created_at = models.DateTimeField(auto_now_add=True)

   def __str__(self):
        return self.name