# Generated by Django 4.0.5 on 2022-06-09 22:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('empregadosapi', '0003_alter_professor_nome'),
    ]

    operations = [
        migrations.CreateModel(
            name='Aluno',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.CreateModel(
            name='Turma',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('disciplina', models.CharField(max_length=20)),
            ],
        ),
    ]
