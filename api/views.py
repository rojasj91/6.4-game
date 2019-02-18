from django.shortcuts import render

# Create your views here.
from fight.models import Character
from rest_framework import viewsets
from .serializers import CharacterSerializer

class ApiViewSet(viewsets.ModelViewSet):

    serializer_class = CharacterSerializer
    queryset = Character.objects.all()


    def perform_create(self, serializer):
        serializer.save()