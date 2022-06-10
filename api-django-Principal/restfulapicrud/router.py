from empregadosapi.viewsets import ProfessorViewset, TurmaViewset,AlunoViewset
from rest_framework import routers

router = routers.DefaultRouter()
router.register('professor',ProfessorViewset)
router.register('aluno', AlunoViewset)
router.register('turma',TurmaViewset)