from rest_framework import viewsets
from . import models
from . import serializers

class ProfessorViewset(viewsets.ModelViewSet):
    queryset = models.Professor.objects.all()
    serializer_class = serializers.ProfessorSerializer
class AlunoViewset(viewsets.ModelViewSet):
    queryset = models.Aluno.objects.all()
    serializer_class = serializers.AlunoSerializer
class TurmaViewset(viewsets.ModelViewSet):
    queryset = models.Turma.objects.all()
    serializer_class = serializers.TurmaSerializer
