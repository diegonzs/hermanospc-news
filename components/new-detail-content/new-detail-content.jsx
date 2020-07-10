import * as React from 'react';
// @ts-ignore
import styles from './new-detail-content.module.scss';

function createContent() {
	return {
		__html:
			'<p><img src="https://www.muycomputer.com/wp-content/uploads/2020/07/Google-Nest-2020-e1594374789649.jpg" style="display: block; margin: 1em auto"></p>\n<p>De pequeños cubos a cilindros, pantallas, e incluso discos. Con el paso de los años hemos visto cómo los altavoces inalámbricos pasaban por todo tipo de formatos, diseños y <a href="https://www.muycomputer.com/2020/05/08/google-nest-wifi-analisis/">funcionalidades</a>. Sin embargo, parece que <strong>el próximo Google Nest presentará un nuevo formato</strong>, con un altavoz rectangular que podrá sujetarse tanto vertical como horizontalmente.</p>\n<p>Y es que ha sido la propia Google la que, aparentemente empujada por <a href="https://twitter.com/androidtv_rumor/status/1281173037388267522?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1281173037388267522%7Ctwgr%5E&amp;ref_url=https%3A%2F%2Fwww.slashgear.com%2Fgoogle-nest-home-leaked-with-strange-new-shape-09628306%2F">una reciente filtración</a>, ha decidido adelantado algunas imágenes oficiales sobre cómo será su próximo dispositivo, no sólo mostrando este innovador diseño, sino confirmando <strong>la inminente llegada del mismo</strong>.</p>\n<blockquote class="twitter-tweet tw-align-center">\n<p dir="ltr" lang="en">Here&#8217;s the 13 second video they shared with us. <a href="https://t.co/TMw9HSeSbC">pic.twitter.com/TMw9HSeSbC</a></p>\n<p>— Mishaal Rahman (@MishaalRahman) <a href="https://twitter.com/MishaalRahman/status/1281389880875126788?ref_src=twsrc%5Etfw">July 10, 2020</a></p></blockquote>\n<p><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script><br />\nManteniendo un diseño todavía en línea con el resto de su familia, este altavoz inteligente estará cubierto por <strong>una tela suave mallada</strong>. Aunque a diferencia del Home Mini, ahora Google Nest Mini, parece que este tejido cubrirá completamente toda la superficie del altavoz, a excepción de <strong>una pequeña superficie de goma plana para la parte inferior</strong>, destinada a mantener una posición erguida más estable.</p>\n<p>No obstante, como decíamos el nuevo Google Nest también<strong> parece ser apto para mantenerse tumbado</strong>, apreciándose el uso de dos tipos de tela para el frontal del altavoz y su anverso, destacando este segundo con un color algo más oscurecido, presumiblemente por algún tipo de fibra añadida que mejore su adhesión.</p>\n<p>Más allá del botón para silenciar el micrófono situado en su parte trasera, aparentemente el altavoz <strong>no contará con ningún control físico</strong>, por lo que parece lógico asumir que Google volverá a apostar por el uso de <strong>algún área oculta sensible al tacto</strong> para el control manual, de igual manera que los Google Nest Mini; y por su puesto, el imperante de su uso por voz.</p>\n<p>Sin embargo, más allá de los gustos personales, ahora queda por saber si este nuevo diseño será <strong>funcional con respecto a su sonoridad</strong>, ya que aunque el espacio disponible es claramente mayor, podríamos notar algunas fallas con respecto a la salida y alcance 360º del sonido.</p>\n<p>La entrada <a rel="nofollow" href="https://www.muycomputer.com/2020/07/10/google-nest-2020-altavoz-inteligente/">Google muestra su nuevo Nest, un altavoz inteligente de gran tamaño y formato rectangular</a> es original de <a rel="nofollow" href="https://www.muycomputer.com">MuyComputer</a></p>\n',
	};
}

export const NewDetailContent = () => {
	return (
		<div
			className={styles.NewDetailContentContainer}
			dangerouslySetInnerHTML={createContent()}
		/>
	);
};
