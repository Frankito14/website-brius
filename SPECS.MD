# Centro Medico Brius - Sitio web

Sitio web del Centro Médico Brius. 

Los objetivos del sitio son:
- Publicitar los servicios ofrecidos.
- Mostrar las especialidades disponibles.
- Brindar informacion de contacto.
- Brindar informacion del centro.

Tecnologias a usar:
- Next.js (App router)
- TypeScript
- TaliwindCSS.

Reglas de diseño:
- Mobile First
- Responsive para escritorio
- Responsive para tablet
- Los colores principales son azul y blanco.
- No dark mode, solo light mode.
- No hagas configuraciones super complejas de tailwind, solo usa las clases por defecto.
- Que los colores del sitio puedan ser modificados facilemente desde la condiguracion de tailwind.


## Landing Page (/ | /landing | /inicio)

### Componentes Principales:

#### Navigator:
- Logo del centro
- Navegacion a: Inicio, Nosotros, Servicios (Que es un dropdown que tiene las opciones Medicina y Estetica) y Contacto (Estas secciones se crearan proximamente, dejar un placeholder mientras tanto)
- Numero de teléfono para consultas

#### Hero:
Contiene la siguiente descripcion:

En el año 2002

Comenzamos a brindar asistencia médica

abocando nuestros servicios a la gente que más lo necesitaba, así fuimos creciendo y desarrollándonos en las distintas áreas de la salud y llegando a cubrir todas las especialidades médicas.

#### Main

###### Seccion 1:
Seccion que contenga 3 CARDS que digan lo siguiente:

- Kinesiologia atiende: i.o.m.a. - Docthos - medife  sancor salud - swiss medical colegios escribano otras

- Tecnología digital para diagnostico por imagen

- También atendemos obras sociales y PAMI

###### Seccion 2:

Contiene 2 cards que dicen:

- Asociese sin cuota de ingreso

- Sin limites de  edad

###### Seccion 3:

Seccion especialmente importante para mostrar los servicios.

Contiene 2 cards que dicen:

CARD 1:

Medicina

Una empresa de salud dedicada al cuidado de Ud. y su familia.

Boton “Leer mas”

CARD 2:

Estetica

Estética corporal y facial no invasiva.

Boton de “Leer mas”

###### Seccion 4: 

Mapa de google que apunte a Gaucho Cruz 5510, B1682AKN Villa Bosch, Provinciade Buenos Aires

#### Footer: 
- Numero de contacto, 
- Direccion, 
- Telefono, 
- Mail, 
- Redes sociales (Instagram y Facebook)
- Formulario de contacto

## Pages

A continuacion se van a mostrar las distintas paginas que contiene el sitio sin contar la landing page.

Es importante que cada una de ellas mantenga el mismo estilo que la landing page.

Cada una de ellas debe contener el mismo componente Header/Navigator y Footer creados anteriormente. Hay que agregar los links para navegar entre sitios en el Header/Navigator. 

## Nosotros (/nosotros)
Incluye el Navigator y El Footer.

Titulo: Centro Médico Brius

Entre medio hay una texto que dice:
Quienes somos.
Centro Médico Brius... Una empresa dedicada al cuidado de la salud.

Comenzamos a brindar asistencia médica en el año 2002 y enfocamos nuestros servicios hacia la gente que más lo necesitaba, esa fue la clave de nuestro crecimiento, junto con la constancia y el trato cordial.

nos destacamos en distintas áreas de la salud y cubrimos todas las especialidades médicas .

contamos con servicio de Diagnóstico por Imagen, siendo unos de los pocos en la provincia de Bs. As. en realizar espinograma digital.

en la actualidad contamos con la capacidad de realizar tratamientos de estética corporal y facial no invasiva, logrando notables resultados y pacientes satisfechos.

todo tratamiento está supervisado y controlado por nuestros profesionales médicos.

Podes modificar el texto para que suene mas profesional.

## Medicina (/medicina)
Incluye el Navigator y El Footer.

Titulo: Brius Medicina

Es un listado con todas las especialidades del centro.

Debe contener un mini Hero similar al que esta en la carpeta /examples/hero_estetica.png, si bien ese header es para la parte de estitca, debe ser muy similar.

Dentro del dominio, Medicina y Estetica se complementan, Medicina teniendo un toque mas masculino y Estetica siendo mas femenino. 

La estitca del sitio debe ser mas masculina, debe usar colores mas celestes, que no rompan con la estetica del sitio.

Contiene las siguientes especialidades:

•Alergia

•Cardiología

             •E.C.G.

              •Ecocardiograma, arterial y venoso

              •Ecocardiograma Doppler B/N y color

              •Ergometría 12 derivaciones

              •Holter 24 Hs.

              •Presurometría 24 Hs.

•Cirugía general

•Clinica Médica

•Dermatología

•Diabetología

•Endocrinología

•Fonoaudiología

             •Audiometrías

              •Logoaudiometría

              •otoemisionesacusticas

              •Timpanometría
•Flebología y vascular

•Gastroenterología

•Gerontología

•ginecologia

               •Pap y colpo

•inmunología

•Nefrología

•Neumonología

              •Espirometría

•Nutrición

•Obesidad

•Oftalmología

•Ortopedia

•OTR

               •Rinoscopía

•Pediatría

•Reumatología

•Traumatología
•Traumatología Infantíl

•Urología

## Estetica (/estetica)
Incluye el Navigator y El Footer.

Titulo: Brius Estetica

Debe contener un mini Hero similar al que esta en la carpeta /examples/hero_estetica.png, si bien ese header es para la parte de estitca, debe ser muy similar.


La estitca del sitio debe ser mas femenina, debe usar colores mas rosados, que no rompan con la estetica del sitio.

Idealmente, cada tratamiento debe ser su propia seccion.
Para que no quede tan vacio, se pueden agregar imagenes a modo de placeholder relacionadas con la belleza y el cuidado femenino.

Contiene distintos tipos de tratamientos, cada uno con las cosas que cubre:

Tratamientos Cosmiatría:
• Acné, rosacea y maculas (manchas)
• Lifting
• anti age / Peeling
• Punta de diamante
• radiofrecuencia

Tratamientos corporales

(Agregar un tag que diga primer consulta sin cargo)

• Masaje reductor y modelador
• tratamiento para la celulitis
• tonificación con electrodos
• Tratamiento Esclerosante
• Lipoescultura laser
• Depilación Laser definitiva
• Drenaje Linfático
• Crioterapia
• Botox
• criolipolisis
• mesoterapia
• radiofrecuencia

Podología

• onicomicosis
• onicocriptosis
• tratamientos laser
• pie dibetico

Masajes:
• descontracturantes
• tailandes
• californiano
• drenaje linfatico

Depilación Definitiva Laser

Agregar un tag: "¡Las leonas se atienden con nosotros!"

No contiene servicios

Finalmente un texto que a modo de cierre que diga 

Consultas y asesoramiento sin cargo
• Atendido por profesionales •

## Contacto (/contacto)
Incluye el Navigator y El Footer.

Titulo: Contacto

Seccion que incluye el mapa con la direccion del lugar + Direccion y horarios.