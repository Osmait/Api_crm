import * as Yup from 'Yup'

export const nuevoClienteSchema = Yup.object().shape({
    nombre: Yup.string()
                .min(3,'El Nombre es muy corto')
                .max(20,'El Nombre es muy largo')
                .required("El Nombre del Cliente es Obligatorio"),
    empresa: Yup.string()
                .required("El Nopmbre de la empresa es obligatorio")
                ,
    email: Yup.string()
              .email("Email No es valido")
              .required("El Email es obligatorio  "),
    telefono: Yup.number()
                 .positive("Numero no valido ")
                 .integer("Numero no valido ")
                 .typeError("El numero no es valido")
                 
    
    
              
})

