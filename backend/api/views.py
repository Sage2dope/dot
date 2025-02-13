from django.shortcuts import render
from .serializers import ContactSerializer
from .models import Contact
from rest_framework import generics

# Create your views here.


class ContactListCreate(generics.ListCreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save()
        else:
            print(serializer.errors)


class DeleteContact(generics.DestroyAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

    def perform_destroy(self, instance):
        instance.delete()


class UpdateContact(generics.UpdateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

    def perform_update(self, serializer):
        if serializer.is_valid():
            serializer.save()
        else:
            print(serializer.errors)
