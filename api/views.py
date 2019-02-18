from django.shortcuts import render

# Create your views here.
from fight.models import Progress
from rest_framework import viewsets
from .serializers import ProgressSerializer

class ApiViewSet(viewsets.ModelViewSet):

    serializer_class = ProgressSerializer
    queryset = Progress.objects.all()


    def perform_create(self, serializer):
        serializer.save()