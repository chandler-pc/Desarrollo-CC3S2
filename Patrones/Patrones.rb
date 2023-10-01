class NotificationFactory
  def create_notifier
    raise NotImplementedError, "Las subclases deben implementar el metodo create_notifier"
  end
end

# Fábrica para crear notificador de electrónica
class ElectronicsNotificationFactory < NotificationFactory
  def create_notifier
    ElectronicNotifier.new
  end
end

# Fábrica para crear notificador de moda
class FashionNotificationFactory < NotificationFactory
  def create_notifier
    FashionNotifier.new
  end
end

class Notifier
  def notify(message)
    raise NotImplementedError, "Las subclases deben implementar el metodo notify"
  end
end

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

class NotifierDecorator < Notifier
  attr_reader :notifier

  def initialize(notifier)
    @notifier = notifier
  end

  def notify(message)
    @notifier.notify(message)  # Delega la notificación al notificador base
  end
end


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

class Customer
  attr_reader :name

  def initialize(name)
    @name = name
  end

  def update(message)
    puts "#{name} ha recibido una notificación: #{message}"
  end
end

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

# Creacion de las fabricas de notificaciones
electronics_factory = ElectronicsNotificationFactory.new
fashion_factory = FashionNotificationFactory.new

# Creacion de las notificaciones especificas
electronics_notifier = EmailNotifierDecorator.new(electronics_factory.create_notifier)
fashion_notifier = SMSNotifierDecorator.new(fashion_factory.create_notifier)

# Creacion de los clientes
customer1 = Customer.new("Cliente 1 - Daniel")
customer2 = Customer.new("Cliente 2 - Steven")

# Creacion y modificacion de los estados
shipment_status = ShipmentStatus.new
shipment_status.add_observer(customer1)
shipment_status.add_observer(customer2)

shipment_status.set_status("en camino")
shipment_status.set_status("enviado")
electronics_notifier.notify("Su pedido de cargadores ha sido enviado")
fashion_notifier.notify("Nuevo catálogo de moda disponible")

