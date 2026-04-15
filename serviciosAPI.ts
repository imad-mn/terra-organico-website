interface ModeloBase {
    fechaEntrega: string;
    codigoCliente: number
}
export interface Configuracion extends ModeloBase {
    proximaFechaEntrega: string;
    detenerPedidos: boolean;
    tipoProductos: string[];
    ordenEntrega: number[];
}
export interface ConElementos<T> extends ModeloBase {
    elementos: T[];
}
export interface Producto {
    id: number;
    tipo: string;
    nombre: string;
    presentacion: string;
    descripcion: string;
    precio: number;
    habilitado: boolean;
    proveedor: string;
    imagen: string;
    decimales: boolean;
    pesoReal: boolean;
}
export interface Testimonio {
    Persona: string;
    Testimonio: string;
}

const config = useRuntimeConfig()

async function get<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${config.public.apiBase}/${endpoint}`);
    return response.json();
}

export async function obtenerCategorias(): Promise<string[]> {
    const configuracion = await get<Configuracion>('configuracion');
    return configuracion.tipoProductos;
}

export async function obtenerProductos(): Promise<Producto[]> {
    const conElementos = await get<ConElementos<Producto>>('productos');
    return conElementos.elementos;
}

export async function obtenerTestimonios(): Promise<Testimonio[]> {
    const conElementos = await get<ConElementos<Testimonio>>('testimonios');
    return conElementos.elementos;
}
