//@ts-nocheck
import App from 'next/app';
import Head from 'next/head';
import { UserContext } from 'context/user-context';
import { NewsContext } from 'context/news-context';
import { useFirebaseUser } from 'hooks/useFirebaseUser';
import { Header } from 'components/header';
import { Footer } from 'components/footer';
import { OverlayPage } from 'components/overlay-page';

import '../styles/main.scss';
import 'react-toastify/dist/ReactToastify.min.css';
import { NewsDetail } from 'components/news-detail';

const htmlContent = `<p><img src="https://www.muycomputer.com/wp-content/uploads/2020/07/Galaxy-Note-21.jpg" style="display: block; margin: 1em auto"></p>\n<p>Todavía estamos a la espera de que Samsung presente el <a href="https://www.muycomputer.com/tags/galaxy-note-20/" target="_blank" rel="noopener noreferrer">Galaxy Note 20</a>, pero gracias a una interesante filtración hemos tenido la ocasión de ver <a href="https://www.notebookcheck.net/Classy-Samsung-Galaxy-Note-21-renders-show-off-curves-zero-bezel-and-no-punch-hole-hinting-at-under-display-fingerprint-scanner-and-front-camera.480935.0.html" target="_blank" rel="noopener noreferrer">un par de renders conceptuales</a> del Galaxy Note 21, un terminal que, si todo va según lo previsto, debería llegar al mercado <strong>en agosto del próximo año.</strong></p>\n<p>En efecto, esto quiere decir que todavía falta un poco más de un año para que Samsung presente el Galaxy Note 21. Sin embargo, debemos tener en cuenta que cuando la compañía surcoreana ultima el lanzamiento de un determinado smartphone ya se encuentra trabajando, <strong>«en segundo plano», en su sucesor</strong>. Esto quiere decir que Samsung ya trabaja en el Galaxy Note 21, y que algunos aspectos básicos, como su diseño y sus especificaciones, ya deberían haber sido definidos.</p>\n<p>Puede que alguno de nuestros lectores piense que esto es «ir demasiado rápido», pero pensad que con el ritmo que llevan los grandes del sector (renovaciones anuales), y el plazo necesario para completar un ciclo de producción en masa completo que permita abastecer sin problema el mercado, resulta totalmente necesario, ya que de lo contrario <strong>sería imposible mantener un ciclo de renovación anual.</strong></p>\n<h3><strong>Galaxy Note 21: cámara frontal integrada en la pantalla</strong></h3>\n<p><a href="https://www.muycomputer.com/wp-content/uploads/2020/07/Galaxy-Note-21-cámara.jpg"><img class="aligncenter size-full wp-image-268306" src="https://www.muycomputer.com/wp-content/uploads/2020/07/Galaxy-Note-21-cámara.jpg" alt="Galaxy Note 21" width="1280" height="572" srcset="https://www.muycomputer.com/wp-content/uploads/2020/07/Galaxy-Note-21-cámara.jpg 1280w, https://www.muycomputer.com/wp-content/uploads/2020/07/Galaxy-Note-21-cámara-500x223.jpg 500w, https://www.muycomputer.com/wp-content/uploads/2020/07/Galaxy-Note-21-cámara-630x282.jpg 630w, https://www.muycomputer.com/wp-content/uploads/2020/07/Galaxy-Note-21-cámara-768x343.jpg 768w" sizes="(max-width: 1280px) 100vw, 1280px" /></a></p>\n<p>Es lo más llamativo que muestran estos renders conceptuales. Si os fijáis no hay ni rastro de la cámara frontal, lo que significa que esta debería ir <a href="https://www.muycomputer.com/2019/06/03/oppo-muestra-el-funcionamiento-de-su-camara-bajo-pantalla/" target="_blank" rel="noopener noreferrer">integrada en la pantalla</a>. Algunos rumores apuntaron esta posibilidad en el Galaxy Note 20, pero os puedo decir con total seguridad que <strong>no se cumplirán.</strong></p>\n<p>Con eso no quiero decir que Samsung no contemple la posibilidad de integrar la cámara frontal debajo de la pantalla, de hecho creo todo lo contrario, pienso que <strong>esa es la siguiente transición hacia el formato todo pantalla</strong> que quieren, pero está claro que no han conseguido superar a tiempo todos los desafíos técnicos que esto supone, y que por eso no han podido integrar la cámara bajo la pantalla del Galaxy Note 20.</p>\n<p>La situación podría cambiar por completo con el Galaxy Note 21. El gigante surcoreano tendrá más tiempo para <strong>pulir todos los detalles pendientes</strong>, y con ese margen extra el Galaxy Note 21 podría convertirse en el primer smartphone tope de gama de Samsung equipado con una cámara frontal debajo de la pantalla.</p>\n<p>Si esto se cumple habrá que ver la calidad de imagen que es capaz de mantener Samsung, y el precio de venta que tiene el Galaxy Note 21. Lo digo por una razón muy sencilla, y es que este avance representará <strong>un aumento de los costes de fabricación</strong>, y esto debería tener, como contrapartida un aumento del precio de venta.</p>\n<p>A la izquierda tenemos un render conceptual del Galaxy Note 21, que mantiene el acabado todo pantalla plano, y a la derecha está el diseño  de modelo «Plus» o «Ultra», que <strong>luce mucho mejor gracias a la terminación Edge,</strong> que extiende la pantalla en los laterales. Tened en cuenta, como hemos dicho, que esta filtración no tiene ningún valor oficial, y que por muy interesante que resulte debemos tratarla como un simple rumor.</p>\n<p>La entrada <a rel="nofollow" href="https://www.muycomputer.com/2020/07/10/renders-galaxy-note-21/">Así de impresionante podría ser el Galaxy Note 21</a> es original de <a rel="nofollow" href="https://www.muycomputer.com">MuyComputer</a></p>\n`;

function MyApp({ Component, pageProps, sessionUser, isServer }) {
	const user = useFirebaseUser(sessionUser);
	const [selectedNews, setSelectedNews] = React.useState(null);
	const [isOverlayActive, setIsOverlayActive] = React.useState(false);

	React.useEffect(() => {
		if (!!selectedNews) {
			setIsOverlayActive(true);
		}
	}, [selectedNews]);

	return (
		<UserContext.Provider value={user}>
			<NewsContext.Provider value={{ selectedNews, setSelectedNews }}>
				<Head>
					<meta name="viewport" content="width=device-width, initial-scale=1" />
				</Head>
				<div className="mainContainer">
					<Header />
					<div className="mainContent">
						<Component {...pageProps} isServer={isServer} />
					</div>
					<Footer />
					<OverlayPage isActive={!!selectedNews && isOverlayActive}>
						{!!selectedNews && (
							<NewsDetail
								title="AMD Launch the Radeon VII: The next power product against Nvidia"
								autor="TomsHardware"
								image="https://i.redd.it/1um8uengwo331.jpg"
								content={htmlContent}
								onBack={() => {
									setIsOverlayActive(false);
									setTimeout(() => {
										setSelectedNews(null);
									}, 250);
								}}
							/>
						)}
					</OverlayPage>
				</div>
			</NewsContext.Provider>
		</UserContext.Provider>
	);
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
MyApp.getInitialProps = async (appContext) => {
	// calls page's `getInitialProps` and fills `appProps.pageProps`
	const sessionUser =
		appContext.ctx.req && appContext.ctx.req.session
			? appContext.ctx.req.session.decodedToken
			: null;
	const appProps = await App.getInitialProps(appContext);
	return { ...appProps, sessionUser, isServer: !!appContext.ctx.req };
};

export default MyApp;
