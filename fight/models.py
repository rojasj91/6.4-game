from django.db import models

# Create your models here.


class Progress(models.Model):
    selected_character = models.CharField(max_length=100, null=True)
    char_health = models.IntegerField(default = 100)
    selected_enemy = models.CharField(max_length=100, null = True)
    enemyHealth = models.IntegerField(default = 100)
    game_complete = models.BooleanField(default=False)

