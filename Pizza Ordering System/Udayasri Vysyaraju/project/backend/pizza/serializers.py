from rest_framework import serializers
from .models import Product,Register,Login


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'product_name', 'price', 'pimage')
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Register
        fields = ('id','email','username', 'password')

class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = Login
        fields = ('id','email', 'password')

