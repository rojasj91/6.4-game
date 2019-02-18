
from rest_framework.serializers import ModelSerializer
# from rest_framework import serializers

from fight.models import Progress



# This class is responsible for properly formatting our model as json
# We need to tell it the model to use, and which fields we want included in the json.
class ProgressSerializer(ModelSerializer):


    class Meta:
        model = Progress
        fields = '__all__'
        depth = 1