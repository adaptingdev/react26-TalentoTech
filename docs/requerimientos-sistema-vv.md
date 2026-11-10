# Documento de Requerimientos — Sistema de Gestión "VV"

| Campo | Valor |
|---|---|
| Versión | 1.0 |
| Fecha | 06/11/2026 |
| Autor | Leandro Lima |
| Cliente / usuaria principal | Mamá (dueña del negocio) |
| Estado | Validado con la clienta. Pendiente: análisis del Excel actual. |

---

## 1. Introducción

### 1.1 Propósito
Este documento describe qué debe hacer el sistema de gestión para el negocio de compra/venta de ropa. Sirve como acuerdo entre la usuaria (la dueña) y el desarrollador, y como base para planificar el trabajo.

### 1.2 Alcance
El sistema permitirá registrar compras de mercadería, controlar el stock, registrar las salidas de venta, registrar ventas fiadas, llevar la cuenta corriente de cada clienta, gestionar encargues y cambios, y ver reportes de ganancias y de prendas que no se venden.

En una etapa posterior incluirá un catálogo online para compartir por WhatsApp y un sistema de referidos.

### 1.3 Glosario
| Término | Significado en este negocio |
|---|---|
| **Prenda / Producto** | Un modelo de ropa (ej. "Campera rompeviento con capucha"). |
| **Variante** | Una combinación concreta de talle y color de un producto (ej. talle M, negro). Es lo que se cuenta en el stock. |
| **Categoría** | Tipo de prenda: remera, jogging, jean, short de baño, ropa interior, medias, buzo, polar, rompeviento, parka, etc. |
| **Proveedor** | Lugar donde se compra: centro productor, negocio local o emprendedor. |
| **Compra** | Una visita a un proveedor en la que se adquieren una o más prendas. Respaldada por un ticket o una factura. |
| **Lugar** | Establecimiento donde trabajan las clientas y donde ella va a vender (ej. CONICET, sindicato). |
| **Salida** | Un recorrido de venta: prepara un bolso con prendas, va a uno o más lugares, las muestra y vuelve. |
| **Venta fiada** | Venta en la que la clienta se lleva la prenda y paga después, en las veces que pueda, sin cuotas fijas ni recargo. |
| **Pago / Entrega** | Monto que la clienta entrega para reducir su deuda. |
| **Cuenta corriente** | Saldo de cada clienta: lo que compró menos lo que pagó. |
| **Encargue** | Pedido de una clienta de una prenda que la dueña no tiene y debe conseguir (muchas veces con foto de referencia). |
| **Cambio** | Una clienta quiere una prenda en otro talle, color o modelo. La dueña la lleva al proveedor para cambiarla. |
| **Prenda estancada** | Prenda que fue ofrecida a todas las clientas al menos 2 veces sin venderse. |
| **Baja** | Salida de stock que no es venta (donación, regalo, daño, pérdida). |

---

## 2. Situación actual (AS-IS)

- **Escala:** entre **15 y 30 clientas** y alrededor de **25 prendas en stock**. No acumula mercadería: compra y repone a medida que vende.
- **Compras:** va a proveedores **2 o 3 veces por semana**. Elige según su experiencia y la temporada. De cada modelo compra **entre 1 y 3 unidades**, en distintos talles y colores. Generalmente le dan **ticket** (a veces factura) y lo guarda para saber cuánto pagó.
- **Reposición:** si una prenda se vende bien, **vuelve al mismo proveedor** a comprar más y la ofrece en todos los lugares que visita.
- **Precio:** al costo le suma **entre un 20% y un 30%**, según la prenda.
- **Salidas de venta:** antes de salir **prepara un bolso** y sabe qué lleva. En cada lugar muestra todas las prendas. Al volver sabe qué se vendió, qué no y qué tiene que cambiar.
- **Ventas:** casi nunca le pagan al contado. **La mayoría son fiadas.** La clienta paga en una, dos, tres o más veces, **sin un número fijo de cuotas** (no la presiona, para no perder la venta) y **sin recargo ni interés**. Lo registra en una **hoja de Excel**.
- **Medios de pago:** efectivo, Mercado Pago o transferencia.
- **Contacto con clientas:** mayormente por **WhatsApp**, a veces en persona.
- **Encargues:** las clientas piden prendas específicas, muchas veces con fotos. Las prendas caras (camperas, parkas, polares) **no las compra sin un pedido concreto**.
- **Cambios:** las clientas no devuelven prendas para que les reintegre la plata. Lo que pasa es que **piden otro talle, color o modelo**, y ella vuelve al proveedor a cambiarla.
- **Prendas que no salen:** si una prenda fue ofrecida a todas las clientas **dos veces** (con otras prendas de por medio) y sigue sin venderse, la guarda como opción para **regalar o donar**, y esa plata se pierde.
- **Tecnología:** usa **principalmente la computadora** porque lee mejor (usa anteojos). Le interesa una versión de celular para consultas rápidas cuando está en la calle.

---

## 3. Problemas y objetivos

| # | Problema detectado | Objetivo del sistema | Cómo lo medimos |
|---|---|---|---|
| P1 | La deuda de las clientas está en un Excel manual, propenso a errores. | Saber en todo momento cuánto debe cada clienta y cuánto hay para cobrar en total. | Saldo por clienta disponible en menos de 10 segundos. |
| P2 | No sabe con precisión cuánto gana, y cobra en plazos variables sin recargo. | Calcular la ganancia por prenda y por mes, separando la cobrada de la pendiente, y mostrar cuánto tarda en cobrar. | Reporte mensual de ganancia y días promedio de cobro. |
| P3 | Hay prendas que no se venden y terminan regaladas (plata perdida). | Contar cuántas veces se ofreció cada prenda y avisar **antes** de que llegue a estancarse. | Reducir el valor donado por mes. |
| P4 | No siempre consigue lo que le piden, y los encargues y cambios no tienen seguimiento. | Registrar encargues y cambios con su estado y saber qué proveedor tiene qué. | % de encargues entregados. |
| P5 | Perdió acceso a los lugares donde vendía. | (Etapa 3) Un canal online para mostrar la ropa y recibir pedidos por WhatsApp. | Ventas originadas por el catálogo o por referidas. |

---

## 4. Usuarios

| Usuario | Descripción | Dispositivo |
|---|---|---|
| **Dueña (administradora)** | Usa todas las funciones. Tiene dificultad visual leve. | PC principalmente y celular para consultas rápidas. |
| **Clienta** *(etapa 3)* | Ve el catálogo público y pide por WhatsApp. No inicia sesión. | Celular. |

---

## 5. Alcance por etapas

### Etapa 1 — MVP (gestión)
- Productos, variantes y categorías
- Proveedores
- Compras e ingreso de stock
- Clientas y lugares
- Ventas fiadas o al contado
- Cuenta corriente y pagos
- Bajas de stock (donación, regalo, daño)
- Importación inicial de datos desde el Excel actual

### Etapa 2
- Salidas de venta (bolso) y conteo de veces ofrecida
- Encargues y cambios
- Reportes (ganancias, deudoras, prendas estancadas, lo más vendido)

### Etapa 3 (crecimiento)
- Catálogo público con botón "Pedir por WhatsApp"
- Referidos (qué clienta trajo a quién)

### Fuera de alcance (por ahora)
- Planes de cuotas fijas e intereses (no se usan en el negocio)
- Cobros online / pasarela de pagos
- Facturación electrónica (AFIP/ARCA)
- App nativa (se usará web responsive / PWA)
- Varios usuarios con distintos permisos
- Ubicación del stock (casa / bolso): ella ya lo sabe; lo cubre en parte el módulo de Salidas

---

## 6. Requerimientos funcionales

Prioridad: **M** = Must (imprescindible), **S** = Should (importante), **C** = Could (deseable).

### 6.1 Productos y proveedores
| ID | Requerimiento | Prioridad |
|---|---|---|
| RF-01 | Dar de alta, editar y desactivar productos (nombre, categoría, descripción, foto, temporada). | M |
| RF-02 | Cada producto puede tener varias variantes de talle y color, cada una con su stock. | M |
| RF-03 | Administrar la lista de categorías (agregar las que haga falta). | M |
| RF-04 | Dar de alta proveedores (nombre, tipo, dirección o zona, teléfono, qué tipo de prendas tiene, notas). | M |
| RF-05 | Desde un producto, ver a qué proveedor se le compró y a qué costo, para poder reponer. | M |
| RF-06 | Buscar productos por nombre, categoría, talle o color. | M |

### 6.2 Compras
| ID | Requerimiento | Prioridad |
|---|---|---|
| RF-07 | Registrar una compra: proveedor, fecha, prendas (variante, cantidad, costo unitario) y total. | M |
| RF-08 | Al registrar una compra, aumentar automáticamente el stock de cada variante. | M |
| RF-09 | Sugerir el precio de venta aplicando el margen (por defecto 25%, editable por prenda). | M |
| RF-10 | Botón "Reponer": crear una compra nueva a partir de un producto, con su proveedor y último costo precargados. | S |
| RF-11 | Adjuntar una foto del ticket o la factura a la compra. | C |

### 6.3 Clientas y lugares
| ID | Requerimiento | Prioridad |
|---|---|---|
| RF-12 | Dar de alta clientas (nombre, WhatsApp, lugar, talle habitual, gustos y notas). | M |
| RF-13 | Dar de alta lugares (nombre, dirección, notas como horarios o restricciones de acceso). | M |
| RF-14 | Ver las clientas agrupadas por lugar. | S |
| RF-15 | Registrar qué clienta la recomendó ("referida por"). | S |
| RF-16 | Abrir un chat de WhatsApp con la clienta con un clic (link `wa.me`). | S |

### 6.4 Ventas y cuenta corriente
| ID | Requerimiento | Prioridad |
|---|---|---|
| RF-17 | Registrar una venta: clienta, fecha, prendas, precio final de cada una y si fue al contado o fiada. | M |
| RF-18 | Al registrar una venta, descontar automáticamente el stock. Avisar si no hay stock. | M |
| RF-19 | En una venta fiada, permitir registrar una entrega inicial (opcional). No se fija número de cuotas. | M |
| RF-20 | Registrar pagos de una clienta: fecha, monto y medio (efectivo, Mercado Pago, transferencia). | M |
| RF-21 | Ver el saldo de cada clienta y su historial de compras y pagos en una sola pantalla. | M |
| RF-22 | Ver el listado de clientas con deuda: saldo, fecha del último pago y días sin pagar. | M |
| RF-23 | Anular una venta o un pago con un motivo (no se borran). | M |
| RF-24 | Generar un mensaje de WhatsApp con el resumen amable de la deuda de una clienta. | C |

### 6.5 Stock
| ID | Requerimiento | Prioridad |
|---|---|---|
| RF-25 | El stock se calcula a partir de movimientos (compra, venta, cambio, baja). No se edita a mano. | M |
| RF-26 | Registrar bajas con motivo (donación, regalo, daño, pérdida) y su costo. | M |
| RF-27 | Ver el stock actual con su valor total al costo y al precio de venta. | M |
| RF-28 | Ver el historial de movimientos de cada variante. | S |

### 6.6 Salidas de venta *(Etapa 2)*
| ID | Requerimiento | Prioridad |
|---|---|---|
| RF-29 | Armar una salida: fecha, lugar o lugares a visitar y prendas que lleva en el bolso. | S |
| RF-30 | Al volver, cerrar la salida marcando por cada prenda: vendida (genera la venta), vuelve, o para cambio. | S |
| RF-31 | Cada vez que una prenda se lleva en una salida a un lugar, sumar 1 a sus "veces ofrecida" en ese lugar. | S |
| RF-32 | Al armar el bolso, sugerir las prendas con menos veces ofrecidas en el lugar que va a visitar. | C |

### 6.7 Encargues y cambios *(Etapa 2)*
| ID | Requerimiento | Prioridad |
|---|---|---|
| RF-33 | Registrar un encargue: clienta, categoría, descripción, talle, color, foto de referencia, precio estimado y fecha. | S |
| RF-34 | Registrar un cambio: clienta, prenda actual, qué quiere en su lugar y proveedor al que hay que llevarla. | S |
| RF-35 | Estados de encargue y cambio: Pendiente → Buscando → Conseguido → Entregado / No conseguido. | S |
| RF-36 | Al entregar un encargue, generar la venta. Al completar un cambio, generar los movimientos de stock (sale una variante, entra otra). | S |
| RF-37 | Ver los encargues y cambios pendientes agrupados por proveedor, para resolverlos en una misma visita. | S |
| RF-38 | Reporte de encargues **no conseguidos**: qué piden y no se encuentra (demanda insatisfecha). | C |

### 6.8 Reportes *(Etapa 2)*
| ID | Requerimiento | Prioridad |
|---|---|---|
| RF-39 | Ganancia del mes: ventas − costo de lo vendido. Separar la **ganancia cobrada** de la **pendiente de cobro**. | S |
| RF-40 | Prendas estancadas y "en riesgo": cuántas veces se ofreció cada prenda y en qué lugares falta ofrecerla. | S |
| RF-41 | Lo más vendido, con su proveedor, para saber qué reponer. | S |
| RF-42 | Total a cobrar, deudas sin movimiento hace más de 30 días y días promedio que tarda en cobrar. | S |
| RF-43 | Plata perdida por bajas y donaciones en el período. | S |
| RF-44 | Gastado en compras vs. cobrado, por mes. | S |

### 6.9 Importación de datos
| ID | Requerimiento | Prioridad |
|---|---|---|
| RF-45 | Importar clientas y saldos actuales desde el Excel existente (carga inicial). *El formato se definirá al analizar el archivo.* | M |

---

## 7. Reglas de negocio

| ID | Regla |
|---|---|
| RN-01 | Stock de una variante = compras + entradas por cambio − ventas − salidas por cambio − bajas. Nunca puede ser negativo. |
| RN-02 | Precio sugerido = costo unitario × (1 + margen). Margen por defecto 25%, configurable. El precio final siempre se puede editar. |
| RN-03 | Cada línea de venta guarda el **costo del momento** de la venta. Las ganancias pasadas no cambian si después sube el costo. |
| RN-04 | Saldo de clienta = suma de ventas no anuladas − suma de pagos no anulados. |
| RN-05 | Los pagos se aplican al **saldo total** de la clienta (cuenta corriente abierta). No hay cuotas fijas ni recargos. |
| RN-06 | Para calcular la ganancia cobrada, los pagos se imputan a las ventas **más antiguas primero** (FIFO). |
| RN-07 | Una prenda está **estancada** si fue ofrecida al menos 2 veces en cada lugar activo sin venderse. Está **en riesgo** si ya se ofreció 2 veces en la mitad o más de los lugares. (Los valores son configurables.) |
| RN-08 | Las ventas y los pagos no se borran: se **anulan** con un motivo, para mantener el historial. |
| RN-09 | Una baja por donación o regalo se registra al costo y cuenta como pérdida en los reportes. |
| RN-10 | Un cambio con proveedor no modifica el costo, salvo que se registre una diferencia de precio. |

---

## 8. Requerimientos no funcionales

| ID | Tipo | Requerimiento |
|---|---|---|
| RNF-01 | Usabilidad / Accesibilidad | Letra base de 18px o más, alto contraste (WCAG AA), botones grandes y opción para agrandar el texto. |
| RNF-02 | Usabilidad | Diseño pensado primero para **PC**, y adaptado a celular para consultas rápidas (stock, saldo de clienta, registrar pago). |
| RNF-03 | Usabilidad | Registrar una venta o un pago en menos de 1 minuto y en no más de 3 pantallas. |
| RNF-04 | Usabilidad | Lenguaje simple y sin términos técnicos. Confirmación antes de anular algo. |
| RNF-05 | Seguridad | Acceso con usuario y contraseña. Datos de clientas protegidos (Ley 25.326 de Protección de Datos Personales). |
| RNF-06 | Confiabilidad | Backup automático diario de la base de datos. |
| RNF-07 | Disponibilidad | Acceso desde internet (PC y celular). |
| RNF-08 | Portabilidad | Exportar clientas, ventas y saldos a Excel/CSV. |
| RNF-09 | Costo | Infraestructura en planes gratuitos o de bajo costo. |
| RNF-10 | Rendimiento | Volumen bajo (decenas de clientas, decenas de prendas activas, cientos de movimientos por año). No requiere optimizaciones especiales. |
| RNF-11 | Mantenibilidad | Código en GitHub, tests de las reglas de negocio (RN-01 a RN-07) y README con instrucciones. |

---

## 9. Historias de usuario principales (MVP)

**HU-01 — Registrar una compra**
> Como dueña, quiero cargar lo que compré en un proveedor con el costo de cada prenda, para saber cuánto gasté y tener el stock actualizado.
- Elijo o creo el proveedor.
- Agrego prendas (nuevas o existentes) con categoría, talle, color, cantidad y costo.
- El sistema sugiere el precio de venta con el margen.
- El stock aumenta al guardar.

**HU-02 — Registrar una venta fiada**
> Como dueña, quiero registrar que una clienta se llevó prendas para pagarlas después, para no depender del Excel.
- Busco la clienta por nombre (o la creo con nombre y WhatsApp).
- Agrego prendas. El precio aparece sugerido y se puede editar.
- Indico si pagó algo en el momento (opcional).
- El stock baja y el saldo de la clienta sube.

**HU-03 — Registrar un pago**
> Como dueña, quiero anotar cuando una clienta me paga, para saber cuánto me debe todavía.
- Busco la clienta y veo su saldo actual.
- Ingreso monto, fecha y medio (efectivo, Mercado Pago o transferencia).
- El saldo se actualiza y queda en el historial.

**HU-04 — Ver quién me debe**
> Como dueña, quiero ver la lista de clientas con deuda, para saber a quién cobrarle este mes.
- Lista con nombre, lugar, saldo, fecha del último pago y días sin pagar.
- Se puede ordenar y abrir el detalle.

**HU-05 — Dar de baja una prenda**
> Como dueña, quiero registrar cuando regalo o dono una prenda, para saber cuánta plata pierdo por lo que no se vende.
- Elijo la prenda, el motivo y la fecha.
- El stock baja y la pérdida se registra al costo.

## 10. Historias de usuario (Etapa 2)

**HU-06 — Armar el bolso y cerrar la salida**
> Como dueña, quiero anotar qué llevo en el bolso y a qué lugar voy, y al volver marcar qué se vendió, para saber cuántas veces ofrecí cada prenda.

**HU-07 — Ver prendas en riesgo**
> Como dueña, quiero ver qué prendas ya ofrecí muchas veces sin venderlas y en qué lugares todavía no las mostré, para moverlas o rebajarlas antes de tener que regalarlas.

**HU-08 — Encargues y cambios por proveedor**
> Como dueña, quiero ver todos los encargues y cambios pendientes agrupados por proveedor, para resolverlos en una sola visita.

**HU-09 — Saber dónde reponer**
> Como dueña, quiero ver qué se vende más y dónde lo compré, para volver a comprar lo que funciona.

---

## 11. Supuestos y restricciones
- Una sola usuaria administra el sistema.
- Volumen bajo: entre 15 y 30 clientas y alrededor de 25 prendas en stock.
- No se cobran intereses ni recargos.
- Hay conexión a internet en el momento de usar el sistema.
- No hace falta controlar en qué lugar físico está cada prenda (casa o bolso).

## 12. Pendientes
1. **Analizar el Excel actual** (pendrive): cómo están organizadas las hojas, qué columnas tiene, cómo registra ventas y pagos. Definir a partir de eso el formato de importación (RF-45) y revisar si aparecen datos que el sistema no contempla.
2. Confirmar con ella la definición de "en riesgo" (RN-07) una vez que use el módulo de Salidas.

## 13. Historial de versiones
| Versión | Fecha | Cambios |
|---|---|---|
| 0.1 | 05/11/2026 | Borrador inicial a partir de la entrevista. |
| 1.0 | 06/11/2026 | Preguntas abiertas respondidas. Cuenta corriente abierta (sin cuotas fijas ni recargo). Nuevos módulos: Lugares y Salidas de venta. Prenda estancada definida por veces ofrecida, no por días. Devoluciones reemplazadas por Cambios. Nuevos medios de pago y categorías. Se agregan RN-06, RN-07 y RN-10. |
