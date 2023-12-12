from django.shortcuts import render

from rest_framework import generics
from .models import *
from .serializers import *

class TurmaDetail(generics.RetrieveAPIView):
    queryset = Turma.objects.all()
    serializer_class = TurmaSerializer

class TurmaList(generics.ListAPIView):
    queryset = Turma.objects.all()
    serializer_class = TurmaSerializer

class AlunoDetail(generics.RetrieveAPIView):
    queryset = Aluno.objects.all()
    serializer_class = AlunoSerializer
