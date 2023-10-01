# Tarea Patrones de Diseño

Explicaremos de forma breve en que consiste nuestra aplicacion, en nuestro caso nos tocaron los patrones:
- Abstract Factory
- Observer
- Decorator

Nuestra pequeña aplicacion es un sistema de notifaciones de una tienda, esta tienda tiene 2 grandes categorias
la categoría de **Electronica**, y la categoría de __Moda__, además tenemos una clase que representa a los clientes
que serán notificados acerca del estado de sus pedidos, otro adicional es que podra ser notificado por
2 medios, ya sea por correo electronico o por mensaje de texto.
___
# Uso de patrones
El uso de patrones de diseño en esta aplicación ha sido de vital importancia, recordar que el patron creacional
`Abstract Factory`, nos permite crear una fabrica abstracta, que a su vez será tomada como modelo para las
fabricas concretas que en seran `ElectronicsNotificationFactory` y `FashionNotificationFactory`, 

```ruby
class ElectronicsNotificationFactory < NotificationFactory
  def create_notifier
    ElectronicNotifier.new
  end
end

class FashionNotificationFactory < NotificationFactory
  def create_notifier
    FashionNotifier.new
  end
end
```
Una vez creadas las fabricas específicas, se procede a crear a las clases de los objetos abstractos, y de objetos
concretos, la clase del objeto abstracto en cuestion es `Notifier`, que es la notificacion

```ruby
class Notifier
  def notify(message)
    raise NotImplementedError, "Las subclases deben implementar el metodo notify"
  end
end
```
Vemos que `Notifier`, obliga a sus subclases a implementar el metodo `notify`, de lo contrario dará una excepcion

Y tenemos los objetos concretos que serian:
```ruby
class ElectronicNotifier < Notifier
  def notify(message)
    "Notificacion electronica: #{message}"
  end
end

class FashionNotifier < Notifier
  def notify(message)
    "Notificacion moda: #{message}"
  end
end
```
Ahora aplicamos también el uso del patrón `Decorator`, que nos permite saber si la notificacion se envio
por correo o por mensaje de texto, esto para evitar crear jerarquia de clases.
Creamos la clase base de decorador `NotifierDecorator`
```ruby
class NotifierDecorator < Notifier
  attr_reader :notifier

  def initialize(notifier)
    @notifier = notifier
  end

  def notify(message)
    @notifier.notify(message)  # Delega la notificación al notificador base
  end
end
```
El decorador base `NotifierDecorator` hereda de la clase `Notifier`, para que pueda hacer uso de su metodo `notify`
De ahi se crean los decoradores específicos.
```ruby
class EmailNotifierDecorator < NotifierDecorator
  def notify(message)
    super
    puts "Enviando notificación por correo electrónico: #{message}"
  end
end

class SMSNotifierDecorator < NotifierDecorator
  def notify(message)
    super
    puts "Enviando notificación por mensaje de texto: #{message}"
  end
end
```

Y por último se hace uso del patrón `Observer`, que nos permitirá enviar la notificacion de inmediato a los clientes
cuando el estado de la entrega cambia, eso es el punto de ese patron de diseño, que los `observadores` sean notificados
cuando el `sujeto observable` cambie de estado.
En esta aplicacion definimos a la clase `ShipmentStatus` como el `Sujeto Observable`, definimos todos los metodos
necesarios para agregar, eliminar y notificar a los observadores.
```ruby
class ShipmentStatus
  attr_reader :status

  def initialize
    @status = "en proceso"
    @observers = []
  end

  def add_observer(observer)
    @observers << observer
  end

  def remove_observer(observer)
    @observers.delete(observer)
  end

  def notify_observers(message)
    @observers.each { |observer| observer.update(message) }
  end

  def set_status(new_status)
    @status = new_status
    notify_observers("Nuevo estado de envío: #{@status}")
  end
end
```
Y a los `observadores` que serian los `clientes` que seran notificados.
```ruby
class Customer
  attr_reader :name

  def initialize(name)
    @name = name
  end

  def update(message)
    puts "#{name} ha recibido una notificación: #{message}"
  end
end
```
Vemos que el Custumer será notificado cuando el estado cambie.

---
De esta manera hemos aplicado los 3 patrones de diseño en esta pequeña aplicación, esto nos permitió entender
que haciendo uso de estos patrones, nos facilitan a nostros como desarrolladores problemas recurrentes.

## Integrantes

- Bustos Ttito, José Fabricio
- Pérez Cueva, Chandler Steven
- Poma Navarro, Christian Daniel
