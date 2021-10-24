import React from "react";
import "./Footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

export default () => {
	return (
		<footer className="footer">
			<div className="footer--socialmediaicons">
				<div className="footer--facebookicon">
					<a href="https://www.facebook.com/willian.oliveira08">
						<FacebookIcon style={{fontSize: 36}} alt="Go to Developer Facebook's Page"/>
					</a>
				</div>
				<div className="footer--instagramicon">
					<a href="https://www.instagram.com/willian.oliveir1">
						<InstagramIcon style={{fontSize: 36}} alt="Go to Developer Instagram's Page"/>
					</a>
				</div>
				<div className="footer--twittericon">
					<a href="https://twitter.com/WilianOllyveira">
						<TwitterIcon style={{fontSize: 36}} alt="Go to Developer Twitter's Page"/>
					</a>
				</div>
				<div className="footer--githubicon">
					<a href="https://www.github.com/WillianOliveir1">
						<GitHubIcon style={{fontSize: 36}} alt="Go to Developer GitHub's Page"/>
					</a>
				</div>
			</div>
				Feito por Willian Oliveira.<br/>
				Dados extraidos de The Movie DataBase - themoviedb.org<br/>
				Direitos de imagem para Netflix<br/>
		</footer>
	);
}
