from restframework import serializers

class loginpage(serializers.Serializer):
    Username = serializers.CharField(max_length=255)
    Password = serializers.CharField(max_lenght=255)
  
  
class signuppage(serializers.Serializer):
    Username = serializers.CharField(max_length=255)
    Email = serializers.CharField(max_lenght=255)
    Password = serializers.CharField(max_lenght=255)