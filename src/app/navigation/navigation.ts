import { Router } from '@angular/router';

let obcjeRouting = {OnlyItem:true }

export function navigation() {
  return [
    {
      'id': 'applications',
      'title': 'Applications',
      'translate': 'NAV.APPLICATIONS',
      'type': 'group',
      'children': [
        {
          'id': 'sample',
          'title': 'Sample',
          'translate': 'NAV.SAMPLE.TITLE',
          'type': 'item',
          'icon': 'email',
          'url': '/sample',
          'badge': {
            'title': 25,
            'translate': 'NAV.SAMPLE.BADGE',
            'bg': '#F44336',
            'fg': '#FFFFFF'
          }
        }
      ]
    }
  ];
}

export function navigationGeneral(context?: Router) {
  return [


    {
      'id': 'home',
      'title': 'Home',
      'translate': 'NAV.SAMPLE.TITLE',
      'type': 'item',
      'customIcon': 'assets/images/scrumboard/GlodLogo.png',
      'url': '/principal',
    },

    { //
      'id': 'cuenta',
      'title': 'Mi cuenta',
      'translate': 'NAV.SAMPLE.TITLE',
      'type': 'item',
      'icon': 'perm_identity',
      'url': '/perfil',
    },
    {
      'id': 'empresarias',
      'title': 'Empresarias',
      'translate': 'NAV.SAMPLE.TITLE',
      'type': 'collapse',
      'icon': 'people',
      'children': [
        {
          'id': 'registroempresariaec',
          'title': 'Crear Nueva Empresaria',
          'translate': 'NAV.SAMPLE.TITLE',
          'type': 'item',
          'icon': 'person_add',
          'url': '/registroempresariaec',
        },
        {
          'id': 'misempresarias',
          'title': 'Mis Empresarias',
          'translate': 'NAV.SAMPLE.TITLE',
          'type': 'item',
          'icon': 'group',
          'url': '/misempresarias',
        },
        {
          'id': 'misprospectos',
          'title': 'Mis Prospectos',
          'translate': 'NAV.SAMPLE.TITLE',
          'type': 'item',
          'icon': 'group',
          'url': '/misprospectos',
        },
        {
          'id': 'misposiblesingresos',
          'title': 'Mis Posibles Ingresos',
          'translate': 'NAV.SAMPLE.TITLE',
          'type': 'item',
          'icon': 'group',
          'url': '/misposiblesingresos',
        },
        {
          'id': 'misactivas',
          'title': 'Mis Activas',
          'translate': 'NAV.SAMPLE.TITLE',
          'type': 'item',
          'icon': 'group',
          'url': '/misactivas',
        },
        {
          'id': 'misposiblesegresos',
          'title': 'Mis Posibles Egresos',
          'translate': 'NAV.SAMPLE.TITLE',
          'type': 'item',
          'icon': 'group',
          'url': '/misposiblesegresos',
        },
        {
          'id': 'misposiblesreingresos',
          'title': 'Mis Posibles Reingresos',
          'translate': 'NAV.SAMPLE.TITLE',
          'type': 'item',
          'icon': 'group',
          'url': '/misposiblesreingresos',
        },
        {
          'id': 'misegresos',
          'title': 'Mis  Egresos',
          'translate': 'NAV.SAMPLE.TITLE',
          'type': 'item',
          'icon': 'group',
          'url': '/misegresos',
        },
        {
          'id': 'misinactivas',
          'title': 'Mis Inactivas',
          'translate': 'NAV.SAMPLE.TITLE',
          'type': 'item',
          'icon': 'group',
          'url': '/misinactivas',
        },
      ]
    },

    {
      'id': 'pedidos',
      'title': 'Pedidos',
      'translate': 'NAV.SAMPLE.TITLE',
      'type': 'collapse',
      'icon': 'shopping_cart',
      'children': [
        {
          'id': 'pedidosprincipal',
          'title': 'Crear Nuevo Pedido',
          'translate': 'NAV.SAMPLE.TITLE',
          'type': 'item',
          'icon': 'add_shopping_cart',
          'url': '/pedidosprincipal',
        },
        {
          'id': 'mispedidos',
          'title': 'Pedidos Reservados',
          'translate': 'NAV.SAMPLE.TITLE',
          'type': 'item',
          'icon': 'view_list',
          'url': '/mispedidos',
        },
        {
          'id': 'pedidosfacturados',
          'title': 'Pedidos Facturados',
          'translate': 'NAV.SAMPLE.TITLE',
          'type': 'item',
          'icon': 'today',
          'url': '/pedidosfacturados',
        },
        {
          'id': 'mispedidosanulados',
          'title': 'Pedidos Anulados',
          'translate': 'NAV.SAMPLE.TITLE',
          'type': 'item',
          'icon': 'remove_circle',
          'url': '/mispedidosanulados',
        },
        {
          'id': 'ReportePedidos',
          'title': 'Reporte Pedidos',
          'translate': 'NAV.SAMPLE.TITLE',
          'type': 'item',
          'icon': 'how_to_vote',
          'url': '/ReportePedidos',
        },
      ]
    },
    {
      'id': 'oficinavirtual',
      'title': 'Oficina Virtual',
      'translate': 'NAV.SAMPLE.TITLE',
      'type': 'collapse',
      'icon': 'timeline',
      'children': [
        {
          'id': 'datoscomision',
          'title': 'Datos de Comisión',
          'translate': 'NAV.SAMPLE.TITLE',
          'type': 'item',
          'icon': 'grade',
          'url': '/datoscomision',
        },
        {
          'id': 'ventassemana',
          'title': 'Venta X Semana',
          'translate': 'NAV.SAMPLE.TITLE',
          'type': 'item',
          'icon': 'how_to_vote',
          'url': '/ventassemana',
        },
     

          {
          'id': 'micartera',
          'title': 'Mi Cartera',
          'translate': 'NAV.SAMPLE.TITLE',
          'type': 'item',
          'icon': 'attach_money',
          'url': '/micarteraempresaria',
        },
        {
        'id': 'ventasmes',
        'title': 'Ventas X Mes',
        'translate': 'NAV.SAMPLE.TITLE',
        'type': 'item',
        'icon': 'insert_chart',
        'url': '/ventasmes',
      },
      {
          'id': 'miscreditos',
          'title': 'Empresarias Crédito',
          'translate': 'NAV.SAMPLE.TITLE',
          'type': 'item',
          'icon': 'table_chart',
          'url': '/miscreditos',
        },
      ]
    },
    {
      'id': 'ubicaciongeneral',
      'title': 'Mis Direcciones',
      'translate': 'NAV.SAMPLE.TITLE',
      'type': 'item',
      'icon': 'place',
      'url': '/ubicaciongeneral',
    },
    

    {
      'id': 'Salir',
      'title': 'Salir',
      'translate': 'NAV.SAMPLE.TITLE',
      'type': 'item',
      'icon': 'input',
      'function': () => {
        localStorage.removeItem("UserSaveRemember");
        context.navigate(['/login'])
      }
    },


  ];
}

export function navigationGeneralLider(context?: Router) {
  return [


    {
      'id': 'home',
      'title': 'Home',
      'translate': 'NAV.SAMPLE.TITLE',
      'type': 'item',
      'customIcon': 'assets/images/scrumboard/GlodLogo.png',
      'url': '/principal',
    },

    { //
      'id': 'cuenta',
      'title': 'Mi cuenta',
      'translate': 'NAV.SAMPLE.TITLE',
      'type': 'item',
      'icon': 'perm_identity',
      'url': '/perfil',
    },
    {
      'id': 'empresarias',
      'title': 'Empresarias',
      'translate': 'NAV.SAMPLE.TITLE',
      'type': 'collapse',
      'icon': 'people',
      'children': [
        {
          'id': 'registroempresariaec',
          'title': 'Crear Nueva Empresaria',
          'translate': 'NAV.SAMPLE.TITLE',
          'type': 'item',
          'icon': 'person_add',
          'url': '/registroempresariaec',
        },
        {
          'id': 'misempresarias',
          'title': 'Mis Empresarias',
          'translate': 'NAV.SAMPLE.TITLE',
          'type': 'item',
          'icon': 'group',
          'url': '/misempresarias',
        },
        {
          'id': 'misprospectos',
          'title': 'Mis Prospectos',
          'translate': 'NAV.SAMPLE.TITLE',
          'type': 'item',
          'icon': 'group',
          'url': '/misprospectos',
        },
        {
          'id': 'misposiblesingresos',
          'title': 'Mis Posibles Ingresos',
          'translate': 'NAV.SAMPLE.TITLE',
          'type': 'item',
          'icon': 'group',
          'url': '/misposiblesingresos',
        },
        {
          'id': 'misactivas',
          'title': 'Mis Activas',
          'translate': 'NAV.SAMPLE.TITLE',
          'type': 'item',
          'icon': 'group',
          'url': '/misactivas',
        },
        {
          'id': 'misposiblesegresos',
          'title': 'Mis Posibles Egresos',
          'translate': 'NAV.SAMPLE.TITLE',
          'type': 'item',
          'icon': 'group',
          'url': '/misposiblesegresos',
        },
        {
          'id': 'misposiblesreingresos',
          'title': 'Mis Posibles Reingresos',
          'translate': 'NAV.SAMPLE.TITLE',
          'type': 'item',
          'icon': 'group',
          'url': '/misposiblesreingresos',
        },
        {
          'id': 'misegresos',
          'title': 'Mis  Egresos',
          'translate': 'NAV.SAMPLE.TITLE',
          'type': 'item',
          'icon': 'group',
          'url': '/misegresos',
        },
        {
          'id': 'misinactivas',
          'title': 'Mis Inactivas',
          'translate': 'NAV.SAMPLE.TITLE',
          'type': 'item',
          'icon': 'people_outline',
          'url': '/misinactivas',
        },
      ]
    },

    {
      'id': 'pedidos',
      'title': 'Pedidos',
      'translate': 'NAV.SAMPLE.TITLE',
      'type': 'collapse',
      'icon': 'shopping_cart',
      'children': [
        {
          'id': 'pedidosprincipal',
          'title': 'Crear Nuevo Pedido',
          'translate': 'NAV.SAMPLE.TITLE',
          'type': 'item',
          'icon': 'add_shopping_cart',
          'url': '/pedidosprincipal',
        },
        {
          'id': 'mispedidos',
          'title': 'Pedidos Reservados',
          'translate': 'NAV.SAMPLE.TITLE',
          'type': 'item',
          'icon': 'check_circle',
          'url': '/mispedidos',
        },
        {
          'id': 'pedidosfacturados',
          'title': 'Pedidos Facturados',
          'translate': 'NAV.SAMPLE.TITLE',
          'type': 'item',
          'icon': 'file_copy',
          'url': '/pedidosfacturados',
        },
        {
          'id': 'pedidosfacturados',
          'title': 'Pedidos Anulados',
          'translate': 'NAV.SAMPLE.TITLE',
          'type': 'item',
          'icon': 'remove_circle',
          'url': '/mispedidosanulados',
        },
        {
          'id': 'liberalider',
          'title': 'Liberacion Pedidos',
          'translate': 'NAV.SAMPLE.TITLE',
          'type': 'item',
          'icon': 'lock_open',
          'url': '/liberalider',
        },
        {
          'id': 'ReportePedidos',
          'title': 'Reporte Pedidos',
          'translate': 'NAV.SAMPLE.TITLE',
          'type': 'item',
          'icon': 'how_to_vote',
          'url': '/ReportePedidos',
        },
      ]
    },

    {
      'id': 'oficinavirtual',
      'title': 'Oficina Virtual',
      'translate': 'NAV.SAMPLE.TITLE',
      'type': 'collapse',
      'icon': 'timeline',
      'children': [
        {
          'id': 'datoscomision',
          'title': 'Datos de Comisión',
          'translate': 'NAV.SAMPLE.TITLE',
          'type': 'item',
          'icon': 'grade',
          'url': '/datoscomision',
        },
        {
          'id': 'ventassemana',
          'title': 'Venta X Semana',
          'translate': 'NAV.SAMPLE.TITLE',
          'type': 'item',
          'icon': 'how_to_vote',
          'url': '/ventassemana',
        },
        
        {
          'id': 'mispuntos',
          'title': 'Mis Puntos',
          'translate': 'NAV.SAMPLE.TITLE',
          'type': 'item',
          'icon': 'control_point_duplicate',
          'url': '/mispuntos',
        },
        {
          'id': 'micarteraempresaria',
          'title': 'Mi Cartera',
          'translate': 'NAV.SAMPLE.TITLE',
          'type': 'item',
          'icon': 'attach_money',
          'url': '/micarteraempresaria',
        },
        {
          'id': 'ventasmes',
          'title': 'Ventas X Mes',
          'translate': 'NAV.SAMPLE.TITLE',
          'type': 'item',
          'icon': 'table_chart',
          'url': '/ventasmes',
        },
        {
          'id': 'miscreditos',
          'title': 'Empresarias Crédito',
          'translate': 'NAV.SAMPLE.TITLE',
          'type': 'item',
          'icon': 'wysiwyg',
          'url': '/miscreditos',
        },


      ]
    },
    {
      'id': 'ubicaciongeneral',
      'title': 'Mis Direcciones',
      'translate': 'NAV.SAMPLE.TITLE',
      'type': 'item',
      'icon': 'place',
      'url': '/ubicaciongeneral',
    },
    {
      'id': 'ADMIN',
      'title': 'Transportista',
      'translate': 'NAV.SAMPLE.TITLE',
      'type': 'collapse',
      'icon': 'delivery_dining',
      'children': [
           {
              'id': 'app-new-route',
              'title': 'Rutas Pendientes',
              'translate': 'NAV.SAMPLE.TITLE',
              'type': 'item',
              'icon': 'alt_route',
              'url': 'routes/delivery/list/000133',
            },


      ]
    },

    {
      'id': 'Salir',
      'title': 'Salir',
      'translate': 'NAV.SAMPLE.TITLE',
      'type': 'item',
      'icon': 'input',
      'function': () => {
        localStorage.removeItem("UserSaveRemember");
        context.navigate(['/login'])
      }
    },

  ];
}

export function navigationClienteFinal(context?: Router) {
  return [

    { //perm_identity
      'id': 'home',
      'title': 'HOME',
      'translate': 'NAV.SAMPLE.TITLE',
      'type': 'item',
      'customIcon': 'assets/images/scrumboard/GlodLogo.png',
      'url': '/principal',
    },
    { //perm_identity
      'id': 'home',
      'title': 'ARTICULOS',
      'translate': 'NAV.SAMPLE.TITLE',
      'type': 'item',
      'icon': 'business_center',
      'url': ['/articulos', JSON.stringify(obcjeRouting) ],
    },
    {
      'id': 'pedidos',
      'title': 'Pedidos',
      'translate': 'NAV.SAMPLE.TITLE',
      'type': 'collapse',
      'icon': 'shopping_cart',
      'children': [
        {
          'id': 'pedidosprincipal',
          'title': 'Crear Nuevo Pedido',
          'translate': 'NAV.SAMPLE.TITLE',
          'type': 'item',
          'icon': 'add_shopping_cart',
          'url': '/pedidosprincipal',
        },
        {
          'id': 'mispedidos',
          'title': 'Pedidos Reservados',
          'translate': 'NAV.SAMPLE.TITLE',
          'type': 'item',
          'icon': 'view_list',
          'url': '/mispedidos',
        },
        {
          'id': 'pedidosfacturados',
          'title': 'Pedidos Facturados',
          'translate': 'NAV.SAMPLE.TITLE',
          'type': 'item',
          'icon': 'today',
          'url': '/pedidosfacturados',
        },
        {
          'id': 'mispedidosanulados',
          'title': 'Pedidos Anulados',
          'translate': 'NAV.SAMPLE.TITLE',
          'type': 'item',
          'icon': 'remove_circle',
          'url': '/mispedidosanulados',
        },
      ]
    },
    {
      'id': 'ubicaciongeneral',
      'title': 'Mis Direcciones',
      'translate': 'NAV.SAMPLE.TITLE',
      'type': 'item',
      'icon': 'place',
      'url': '/ubicaciongeneral',
    },
    

    {
      'id': 'Salir',
      'title': 'Salir',
      'translate': 'NAV.SAMPLE.TITLE',
      'type': 'item',
      'icon': 'input',
      'function': () => {
        localStorage.removeItem("UserSaveRemember");
        context.navigate(['/login'])
      }
    },

  ];

}


export function navigationGeneralEmpre(context?: Router) {
  return [


    { //perm_identity
      'id': 'home',
      'title': 'HOME',
      'translate': 'NAV.SAMPLE.TITLE',
      'type': 'item',
      'url': '/principal',
      'customIcon': 'assets/images/scrumboard/GlodLogo.png',
    },
    { //perm_identity
      'id': 'home',
      'title': 'ARTICULOS',
      'translate': 'NAV.SAMPLE.TITLE',
      'type': 'item',
      'icon': 'business_center',
      'url': ['/articulos', JSON.stringify(obcjeRouting) ],
    },
    {
      'id': 'Cliente',
      'title': 'Mis Clientes',
      'translate': 'NAV.SAMPLE.TITLE',
      'type': 'collapse',
      'icon': 'transfer_within_a_station',
      'children': [
        {
          'id': 'registrocf',
          'title': 'Registrar Cliente Final',
          'translate': 'NAV.SAMPLE.TITLE',
          'type': 'item',
          'icon': 'how_to_reg',
          'url': '/registroclientefinal',
        },
        {
          'id': 'misclientes',
          'title': 'Listado Clientes',
          'translate': 'NAV.SAMPLE.TITLE',
          'type': 'item',
          'icon': 'group',
          'url': '/misclientesf',
        },
        {
          'id': 'mistrace',
          'title': 'Pedido por Entregar',
          'translate': 'NAV.SAMPLE.TITLE',
          'type': 'item',
          'icon': 'group',
          'url': '/routes/delivery/map-trace',
        },
      ]
    },
    {
      'id': 'pedidos',
      'title': 'Pedidos',
      'translate': 'NAV.SAMPLE.TITLE',
      'type': 'collapse',
      'icon': 'shopping_cart',
      'children': [
        {
          'id': 'pedidosprincipal',
          'title': 'Crear Nuevo Pedido',
          'translate': 'NAV.SAMPLE.TITLE',
          'type': 'item',
          'icon': 'add_shopping_cart',
          'url': '/pedidosprincipal',
        },
        {
          'id': 'mispedidos',
          'title': 'Pedidos Reservados',
          'translate': 'NAV.SAMPLE.TITLE',
          'type': 'item',
          'icon': 'view_list',
          'url': '/mispedidos',
        },
        {
          'id': 'pedidosfacturados',
          'title': 'Pedidos Facturados',
          'translate': 'NAV.SAMPLE.TITLE',
          'type': 'item',
          'icon': 'file_copy',
          'url': '/pedidosfacturados',
        },
        {
          'id': 'mispedidosanulados',
          'title': 'Pedidos Anulados',
          'translate': 'NAV.SAMPLE.TITLE',
          'type': 'item',
          'icon': 'remove_circle',
          'url': '/mispedidosanulados',
        },
        {
          'id': 'ReportePedidos',
          'title': 'Reporte Pedidos',
          'translate': 'NAV.SAMPLE.TITLE',
          'type': 'item',
          'icon': 'how_to_vote',
          'url': '/ReportePedidos',
        },
      ]
    },
    {
      'id': 'mispuntos',
      'title': 'Mis Puntos',
      'translate': 'NAV.SAMPLE.TITLE',
      'type': 'item',
      'icon': 'control_point_duplicate',
      'url': '/mispuntos',
    },
    {
      'id': 'oficinavirtual',
      'title': 'Oficina Virtual',
      'translate': 'NAV.SAMPLE.TITLE',
      'type': 'collapse',
      'icon': 'timeline',
      'children': [
        {
          'id': 'micarteraempresaria',
          'title': 'Mi Cartera',
          'translate': 'NAV.SAMPLE.TITLE',
          'type': 'item',
          'icon': 'attach_money',
          'url': '/micarteraempresaria',
        },
        {
          'id': 'creditoglod',
          'title': 'Solicita tu Credito',
          'translate': 'NAV.SAMPLE.TITLE',
          'type': 'item',
          'icon': 'note',
          'url': '/creditos',
        },
        


      ]
    },
    {
      'id': 'ubicaciongeneral',
      'title': 'Mis Direcciones.',
      'translate': 'NAV.SAMPLE.TITLE',
      'type': 'item',
      'icon': 'place',
      'url': '/ubicaciongeneral',
    },


    {
      'id': 'Salir',
      'title': 'Salir',
      'translate': 'NAV.SAMPLE.TITLE',
      'type': 'item',
      'icon': 'input',
      'function': () => {
        localStorage.removeItem("UserSaveRemember");
        context.navigate(['/login'])
      }
    },


  ];
}

export function navigationAdmin(context?: Router) {
  return [


    { //perm_identity
      'id': 'home',
      'title': 'HOME',
      'translate': 'NAV.SAMPLE.TITLE',
      'type': 'item',
      'url': '/principal',
      'customIcon': 'assets/images/scrumboard/GlodLogo.png',
    },
    
    {
      'id': 'ADMIN',
      'title': 'Administración',
      'translate': 'NAV.SAMPLE.TITLE',
      'type': 'collapse',
      'icon': 'admin_panel_settings',
      'children': [
        {
          'id': 'registroempresariaec',
          'title': 'Configuración Home',
          'translate': 'NAV.SAMPLE.TITLE',
          'type': 'item',
          'icon': 'build',
          'url': '/admin/homeconfig',
        },
        {
          'id': 'subircatalogo',
          'title': 'Subir Catalogo',
          'translate': 'NAV.SAMPLE.TITLE',
          'type': 'item',
          'icon': 'control_point_duplicate',
          'url': '/subircatalogo',
        },{
          'id': 'adminpuntos',
          'title': 'Admin puntos',
          'translate': 'NAV.SAMPLE.TITLE',
          'type': 'item',
          'icon': 'payments',
          'url': '/admin/adminpuntos',
        },
        {
          'id': 'registroempresariaec',
          'title': 'Revisión de Creditos',
          'translate': 'NAV.SAMPLE.TITLE',
          'type': 'item',
          'icon': 'list_alt',
          'url': '/creditos/ListCredit',
        },

            {
              'id': 'app-new-route',
              'title': 'Crear Ruta',
              'translate': 'NAV.SAMPLE.TITLE',
              'type': 'item',
              'icon': 'add_road',
              'url': '/routes/new-route',
            },
            {
              'id': 'app-edit-route',
              'title': 'Editar rutas',
              'translate': 'NAV.SAMPLE.TITLE',
              'type': 'item',
              'icon': 'edit_route',
              'url': '/routes/edit-route',
            },
            
            {
              'id': 'app-edit-route',
              'title': 'Admin GeoZonas',
              'translate': 'NAV.SAMPLE.TITLE',
              'type': 'item',
              'icon': 'edit_location',
              'url': '/routes/zones',
            },
            {
              'id': 'app-edit-route',
              'title': 'Admin Parámetros',
              'translate': 'NAV.SAMPLE.TITLE',
              'type': 'item',
              'icon': 'miscellaneous_services',
              'url': '/routes/var-config',
            },
            {
              'id': 'cierreinventario',
              'title': 'Proceso de Inventarios',
              'translate': 'NAV.SAMPLE.TITLE',
              'type': 'item',
              'icon': 'build',
              'url': '/cierreinventario',
            },
            
      ]
    },
    {
      'id': 'ADMIN',
      'title': 'Delivery',
      'translate': 'NAV.SAMPLE.TITLE',
      'type': 'collapse',
      'icon': 'delivery_dining',
      'children': [
           {
              'id': 'app-new-route',
              'title': 'Rutas Pendientes',
              'translate': 'NAV.SAMPLE.TITLE',
              'type': 'item',
              'icon': 'alt_route',
              'url': 'routes/delivery/list/000133',
            },


      ]
    },
    {
      'id': 'Salir',
      'title': 'Salir',
      'translate': 'NAV.SAMPLE.TITLE',
      'type': 'item',
      'icon': 'input',
      'function': () => {
        localStorage.removeItem("UserSaveRemember");
        context.navigate(['/login'])
      }
    },


  ];
}


export function navigationDelivery(context?: Router) {
  return [


    { //perm_identity
      'id': 'home',
      'title': 'HOME',
      'translate': 'NAV.SAMPLE.TITLE',
      'type': 'item',
      'url': '/principal',
      'customIcon': 'assets/images/scrumboard/GlodLogo.png',
    },
    { //perm_identity
      'id': 'home',
      'title': 'ARTICULOS',
      'translate': 'NAV.SAMPLE.TITLE',
      'type': 'item',
      'icon': 'business_center',
      'url': ['/articulos', JSON.stringify(obcjeRouting) ],
    },
    {
      'id': 'Cliente',
      'title': 'Mis Clientes',
      'translate': 'NAV.SAMPLE.TITLE',
      'type': 'collapse',
      'icon': 'transfer_within_a_station',
      'children': [
        {
          'id': 'registrocf',
          'title': 'Registrar Cliente Final',
          'translate': 'NAV.SAMPLE.TITLE',
          'type': 'item',
          'icon': 'how_to_reg',
          'url': '/registroclientefinal',
        },
        {
          'id': 'misclientes',
          'title': 'Listado Clientes',
          'translate': 'NAV.SAMPLE.TITLE',
          'type': 'item',
          'icon': 'group',
          'url': '/misclientesf',
        },
      ]
    },
    {
      'id': 'pedidos',
      'title': 'Pedidos',
      'translate': 'NAV.SAMPLE.TITLE',
      'type': 'collapse',
      'icon': 'shopping_cart',
      'children': [
        {
          'id': 'pedidosprincipal',
          'title': 'Crear Nuevo Pedido',
          'translate': 'NAV.SAMPLE.TITLE',
          'type': 'item',
          'icon': 'add_shopping_cart',
          'url': '/pedidosprincipal',
        },
        {
          'id': 'mispedidos',
          'title': 'Pedidos Reservados',
          'translate': 'NAV.SAMPLE.TITLE',
          'type': 'item',
          'icon': 'view_list',
          'url': '/mispedidos',
        },
        {
          'id': 'pedidosfacturados',
          'title': 'Pedidos Facturados',
          'translate': 'NAV.SAMPLE.TITLE',
          'type': 'item',
          'icon': 'file_copy',
          'url': '/pedidosfacturados',
        },
        {
          'id': 'mispedidosanulados',
          'title': 'Pedidos Anulados',
          'translate': 'NAV.SAMPLE.TITLE',
          'type': 'item',
          'icon': 'remove_circle',
          'url': '/mispedidosanulados',
        },
      ]
    },
    {
      'id': 'mispuntos',
      'title': 'Mis Puntos',
      'translate': 'NAV.SAMPLE.TITLE',
      'type': 'item',
      'icon': 'control_point_duplicate',
      'url': '/mispuntos',
    },
    {
      'id': 'oficinavirtual',
      'title': 'Oficina Virtual',
      'translate': 'NAV.SAMPLE.TITLE',
      'type': 'collapse',
      'icon': 'timeline',
      'children': [
        {
          'id': 'micarteraempresaria',
          'title': 'Mi Cartera',
          'translate': 'NAV.SAMPLE.TITLE',
          'type': 'item',
          'icon': 'attach_money',
          'url': '/micarteraempresaria',
        },

        {
          'id': 'creditoglod',
          'title': 'Solicita tu Credito',
          'translate': 'NAV.SAMPLE.TITLE',
          'type': 'item',
          'icon': 'note',
          'url': '/creditos',
        },        {
          'id': 'ReportePedidos',
          'title': 'Reporte Pedidos',
          'translate': 'NAV.SAMPLE.TITLE',
          'type': 'item',
          'icon': 'how_to_vote',
          'url': '/ReportePedidos',
        },
      ]
    },
    {
      'id': 'ubicaciongeneral',
      'title': 'Mis Direcciones',
      'translate': 'NAV.SAMPLE.TITLE',
      'type': 'item',
      'icon': 'place',
      'url': '/ubicaciongeneral',
    },
    {
      'id': 'ADMIN',
      'title': 'Transportista',
      'translate': 'NAV.SAMPLE.TITLE',
      'type': 'collapse',
      'icon': 'delivery_dining',
      'children': [
           {
              'id': 'app-new-route',
              'title': 'Rutas Pendientes',
              'translate': 'NAV.SAMPLE.TITLE',
              'type': 'item',
              'icon': 'alt_route',
              'url': 'routes/delivery/list/000133',
            },


      ]
    },
    {
      'id': 'Salir',
      'title': 'Salir',
      'translate': 'NAV.SAMPLE.TITLE',
      'type': 'item',
      'icon': 'input',
      'function': () => {
        localStorage.removeItem("UserSaveRemember");
        context.navigate(['/login'])
      }
    },


  ];
}



export function navigationGeneralSac(context?: Router) {
  return [


    {
      'id': 'home',
      'title': 'Home',
      'translate': 'NAV.SAMPLE.TITLE',
      'type': 'item',
      'customIcon': 'assets/images/scrumboard/GlodLogo.png',
      'url': '/principal',
    },

    { //
      'id': 'cuenta',
      'title': 'Mi cuenta',
      'translate': 'NAV.SAMPLE.TITLE',
      'type': 'item',
      'icon': 'perm_identity',
      'url': '/perfil',
    },
    {
      'id': 'empresarias',
      'title': 'Empresarias',
      'translate': 'NAV.SAMPLE.TITLE',
      'type': 'collapse',
      'icon': 'local_florist',
      'children': [
        {
          'id': 'actualizaempresariaec',
          'title': 'Actualiza Empresaria',
          'translate': 'NAV.SAMPLE.TITLE',
          'type': 'item',
          'icon': 'person_add',
          'url': '/actualizaempresariaec',
        },

      ]
    },
    {
      'id': 'reportes',
      'title': 'Reportes',
      'translate': 'NAV.SAMPLE.TITLE',
      'type': 'collapse',
      'icon': 'assessment',
      'children': [
        {
          'id': 'carteraempresariascredito',
          'title': 'Reporte Empresarias Credito',
          'translate': 'NAV.SAMPLE.TITLE',
          'type': 'item',
          'icon': 'library_books',
          'url': '/carteraempresariascredito',
        },

      ]
    },
    {
      'id': 'ubicaciongeneral',
      'title': 'Mis Direcciones',
      'translate': 'NAV.SAMPLE.TITLE',
      'type': 'item',
      'icon': 'place',
      'url': '/ubicaciongeneral',
    },


    {
      'id': 'Salir',
      'title': 'Salir',
      'translate': 'NAV.SAMPLE.TITLE',
      'type': 'item',
      'icon': 'input',
      'function': () => {
        localStorage.removeItem("UserSaveRemember");
        context.navigate(['/login'])
      }
    },


  ];


}

