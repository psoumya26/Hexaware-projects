from django.contrib import admin

# Register your models here.
from .models import Product,Register,Login

class ProductAdmin(admin.ModelAdmin):
    list_display = ('product_name', 'price', 'pimage')

class RegisterAdmin(admin.ModelAdmin):
    list_display = ('email','username', 'password')

class LoginAdmin(admin.ModelAdmin):
    list_display = ('email','password')


# Register your models here.

admin.site.register(Product, ProductAdmin)
admin.site.register(Register, RegisterAdmin)
admin.site.register(Login, LoginAdmin)