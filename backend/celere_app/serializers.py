from rest_framework import serializers
from .models import *

class TurmaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Turma
        fields = '__all__'

class AlunoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Aluno
        fields = '__all__'

class ProfissionalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profissional
        fields = '__all__'

class ProfessorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Professor
        fields = '__all__'

class GestorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gestor
        fields = '__all__'

class NotaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Nota
        fields = '__all__'

class Disc_TurmaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Disc_Turma
        fields = '__all__'

class SerieEscolarSerializer(serializers.ModelSerializer):
    class Meta:
        model = SerieEscolar
        fields = '__all__'

class NivelEnsinoSerializer(serializers.ModelSerializer):
    class Meta:
        model = NivelEnsino
        fields = '__all__'

class FrequenciaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Frequencia
        fields = '__all__'

class BilheteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bilhete
        fields = '__all__'

class ResponsavelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Responsavel
        fields = '__all__'

class ChecklistItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChecklistItem
        fields = '__all__'