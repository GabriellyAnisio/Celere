from django.shortcuts import render

from rest_framework import generics
from .models import *
from .serializers import *
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view

#Index
def index(request):
    return HttpResponse("Hello, world. You're at the index.")

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

# Views de Disc_Turma
class Disc_TurmaCreate(generics.CreateAPIView):
    queryset = Disc_Turma.objects.all()
    serializer_class = Disc_TurmaSerializer

class Disc_TurmaDeleteUpdate(generics.RetrieveUpdateDestroyAPIView):
    queryset = Disc_Turma.objects.all()
    serializer_class = Disc_TurmaSerializer

class Disc_TurmaList(generics.ListAPIView):
    queryset = Disc_Turma.objects.all()
    serializer_class = Disc_TurmaSerializer

class Disc_TurmaDetail(generics.RetrieveAPIView):
    queryset = Disc_Turma.objects.all()
    serializer_class = Disc_TurmaSerializer

# Views de Turma
class TurmaCreate(generics.CreateAPIView):
    queryset = Turma.objects.all()
    serializer_class = TurmaSerializer

class TurmaDeleteUpdate(generics.RetrieveUpdateDestroyAPIView):
    queryset = Turma.objects.all()
    serializer_class = TurmaSerializer

class TurmaList(generics.ListAPIView):
    queryset = Turma.objects.all()
    serializer_class = TurmaSerializer

class TurmaDetail(generics.RetrieveAPIView):
    queryset = Turma.objects.all()
    serializer_class = TurmaSerializer

# Views de SerieEscolar
class SerieEscolarCreate(generics.CreateAPIView):
    queryset = SerieEscolar.objects.all()
    serializer_class = SerieEscolarSerializer

class SerieEscolarDeleteUpdate(generics.RetrieveUpdateDestroyAPIView):
    queryset = SerieEscolar.objects.all()
    serializer_class = SerieEscolarSerializer

class SerieEscolarList(generics.ListAPIView):
    queryset = SerieEscolar.objects.all()
    serializer_class = SerieEscolarSerializer

class SerieEscolarDetail(generics.RetrieveAPIView):
    queryset = SerieEscolar.objects.all()
    serializer_class = SerieEscolarSerializer

# Views de NivelEnsino
class NivelEnsinoCreate(generics.CreateAPIView):
    queryset = NivelEnsino.objects.all()
    serializer_class = NivelEnsinoSerializer

class NivelEnsinoDeleteUpdate(generics.RetrieveUpdateDestroyAPIView):
    queryset = NivelEnsino.objects.all()
    serializer_class = NivelEnsinoSerializer

class NivelEnsinoList(generics.ListAPIView):
    queryset = NivelEnsino.objects.all()
    serializer_class = NivelEnsinoSerializer

class NivelEnsinoDetail(generics.RetrieveAPIView):
    queryset = NivelEnsino.objects.all()
    serializer_class = NivelEnsinoSerializer

# Views de Frequencia
class FrequenciaCreate(generics.CreateAPIView):
    queryset = Frequencia.objects.all()
    serializer_class = FrequenciaSerializer

class FrequenciaDeleteUpdate(generics.RetrieveUpdateDestroyAPIView):
    queryset = Frequencia.objects.all()
    serializer_class = FrequenciaSerializer

class FrequenciaList(generics.ListAPIView):
    queryset = Frequencia.objects.all()
    serializer_class = FrequenciaSerializer

class FrequenciaDetail(generics.RetrieveAPIView):
    queryset = Frequencia.objects.all()
    serializer_class = FrequenciaSerializer

# Views de Aluno
class AlunoCreate(generics.CreateAPIView):
    queryset = Aluno.objects.all()
    serializer_class = AlunoSerializer

class AlunoDeleteUpdate(generics.RetrieveUpdateDestroyAPIView):
    queryset = Aluno.objects.all()
    serializer_class = AlunoSerializer

class AlunoList(generics.ListAPIView):
    queryset = Aluno.objects.all()
    serializer_class = AlunoSerializer

    def list(self, request):
        req = self.request
        turma = req.query_params.get('turma', None)
        queryset = Aluno.objects.all()

        if turma:
            queryset = Aluno.objects.filter(id_turma = turma)

        serializer = AlunoSerializer(queryset, many = True)
        return Response(serializer.data)

class AlunoDetail(generics.RetrieveAPIView):
    queryset = Aluno.objects.all()
    serializer_class = AlunoSerializer

# Views de Bilhete
class BilheteCreate(generics.CreateAPIView):
    queryset = Bilhete.objects.all()
    serializer_class = BilheteSerializer

class BilheteDeleteUpdate(generics.RetrieveUpdateDestroyAPIView):
    queryset = Bilhete.objects.all()
    serializer_class = BilheteSerializer

class BilheteList(generics.ListAPIView):
    queryset = Bilhete.objects.all()
    serializer_class = BilheteSerializer

class BilheteDetail(generics.RetrieveAPIView):
    queryset = Bilhete.objects.all()
    serializer_class = BilheteSerializer

# Views de Responsavel
class ResponsavelCreate(generics.CreateAPIView):
    queryset = Responsavel.objects.all()
    serializer_class = ResponsavelSerializer

class ResponsavelDeleteUpdate(generics.RetrieveUpdateDestroyAPIView):
    queryset = Responsavel.objects.all()
    serializer_class = ResponsavelSerializer

class ResponsavelList(generics.ListAPIView):
    queryset = Responsavel.objects.all()
    serializer_class = ResponsavelSerializer

class ResponsavelDetail(generics.RetrieveAPIView):
    queryset = Responsavel.objects.all()
    serializer_class = ResponsavelSerializer

# Views de ChecklistItem
class ChecklistItemCreate(generics.CreateAPIView):
    queryset = ChecklistItem.objects.all()
    serializer_class = ChecklistItemSerializer

class ChecklistItemDeleteUpdate(generics.RetrieveUpdateDestroyAPIView):
    queryset = ChecklistItem.objects.all()
    serializer_class = ChecklistItemSerializer

class ChecklistItemlList(generics.ListAPIView):
    queryset = ChecklistItem.objects.all()
    serializer_class = ChecklistItemSerializer

class ChecklistItemDetail(generics.RetrieveAPIView):
    queryset = ChecklistItem.objects.all()
    serializer_class = ChecklistItemSerializer


#Views de Comunicado
class ComunicadoCreate(generics.CreateAPIView):
    queryset = Comunicado.objects.all()
    serializer_class = ComunicadoSerializer

class ComunicadoDeleteUpdate(generics.RetrieveUpdateDestroyAPIView):
    queryset = Comunicado.objects.all()
    serializer_class = ComunicadoSerializer

class ComunicadoList(generics.ListAPIView):
    queryset = Comunicado.objects.all()
    serializer_class = ComunicadoSerializer

    def list(self, request):
        req = self.request
        tag = req.query_params.get('tag', None)
        queryset = Comunicado.objects.all()

        if tag:
            queryset = Comunicado.objects.filter(tags = tag)

        serializer = ComunicadoSerializer(queryset, many = True)
        return Response(serializer.data)

class ComunicadoDetail(generics.RetrieveAPIView):
    queryset = Comunicado.objects.all()
    serializer_class = ComunicadoSerializer

#Views da Disciplina
class DisciplinaCreate(generics.CreateAPIView):
    queryset = Disciplina.objects.all()
    serializer_class = DisciplinaSerializer

class DisciplinaDeleteUpdate(generics.RetrieveUpdateDestroyAPIView):
    queryset = Disciplina.objects.all()
    serializer_class = DisciplinaSerializer

class DisciplinaList(generics.ListAPIView):
    queryset = Disciplina.objects.all()
    serializer_class = DisciplinaSerializer

class DisciplinaDetail(generics.RetrieveAPIView):
    queryset = Disciplina.objects.all()
    serializer_class = DisciplinaSerializer

#Views de Planejamento
class PlanejamentoCreate(generics.CreateAPIView):
    queryset = Planejamento.objects.all()
    serializer_class = PlanejamentoSerializer
    
class PlanejamentoDeleteUpdate(generics.RetrieveUpdateDestroyAPIView):
    queryset = Planejamento.objects.all()
    serializer_class = PlanejamentoSerializer

class PlanejamentoList(generics.ListAPIView):
    queryset = Planejamento.objects.all()
    serializer_class = PlanejamentoSerializer
    
class PlanejamentoDetail(generics.RetrieveAPIView):
    queryset = Planejamento.objects.all()
    serializer_class = PlanejamentoSerializer

#Views de Leciona
class LecionaCreate(generics.CreateAPIView):
    queryset = Leciona.objects.all()
    serializer_class = LecionaSerializer
    
class LecionaDeleteUpdate(generics.RetrieveUpdateDestroyAPIView):
    queryset = Leciona.objects.all()
    serializer_class = LecionaSerializer

class LecionaList(generics.ListAPIView):
    queryset = Leciona.objects.all()
    serializer_class = LecionaSerializer
    
class LecionaDetail(generics.RetrieveAPIView):
    queryset = Leciona.objects.all()
    serializer_class = LecionaSerializer