from django.shortcuts import render

from rest_framework import generics
from .models import *
from .serializers import *
from django.http import HttpResponse

#Index
def index(request):
    return HttpResponse("Hello, world. You're at the index.")

class TurmaDetail(generics.RetrieveAPIView):
    queryset = Turma.objects.all()
    serializer_class = TurmaSerializer

class TurmaList(generics.ListAPIView):
    queryset = Turma.objects.all()
    serializer_class = TurmaSerializer

class AlunoDetail(generics.RetrieveAPIView):
    queryset = Aluno.objects.all()
    serializer_class = AlunoSerializer

class AlunoList(generics.ListAPIView):
    queryset = Aluno.objects.all()
    serializer_class = AlunoSerializer

#Views de Profissional
class ProfissionalCreate(generics.CreateAPIView):
    queryset = Profissional.objects.all()
    serializer_class = ProfissionalSerializer
    
class ProfissionalDeleteUpdate(generics.RetrieveUpdateDestroyAPIView):
    queryset = Profissional.objects.all()
    serializer_class = ProfissionalSerializer

class ProfissionalList(generics.ListAPIView):
    queryset = Profissional.objects.all()
    serializer_class = ProfissionalSerializer
    
class ProfissionalDetail(generics.RetrieveAPIView):
    queryset = Profissional.objects.all()
    serializer_class = ProfissionalSerializer


#Views de Professor
class ProfessorCreate(generics.CreateAPIView):
    queryset = Professor.objects.all()
    serializer_class = ProfessorSerializer

class ProfessorDeleteUpdate(generics.RetrieveUpdateDestroyAPIView):
    queryset = Professor.objects.all()
    serializer_class = ProfessorSerializer

class ProfessorList(generics.ListAPIView):
    queryset = Professor.objects.all()
    serializer_class = ProfessorSerializer

class ProfessorDetail(generics.RetrieveAPIView):
    queryset = Professor.objects.all()
    serializer_class = ProfessorSerializer


#Views Gestor
class GestorCreate(generics.CreateAPIView):
    queryset = Gestor.objects.all()
    serializer_class = GestorSerializer

class GestorDeleteUpdate(generics.RetrieveUpdateDestroyAPIView):
    queryset = Gestor.objects.all()
    serializer_class = GestorSerializer

class GestorList(generics.ListAPIView):
    queryset = Gestor.objects.all()
    serializer_class = GestorSerializer

class GestorDetail(generics.RetrieveAPIView):
    queryset = Gestor.objects.all()
    serializer_class = GestorSerializer


#Views de Nota
class NotaCreate(generics.CreateAPIView):
    queryset = Nota.objects.all()
    serializer_class = NotaSerializer

class NotaDeleteUpdate(generics.RetrieveUpdateDestroyAPIView):
    queryset = Nota.objects.all()
    serializer_class = NotaSerializer

class NotaList(generics.ListAPIView):
    queryset = Nota.objects.all()
    serializer_class = NotaSerializer

class NotaDetail(generics.RetrieveAPIView):
    queryset = Nota.objects.all()
    serializer_class = NotaSerializer