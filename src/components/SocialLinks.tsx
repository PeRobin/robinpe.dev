import { Component } from 'solid-js';
import { AiFillLinkedin, AiFillGithub, AiFillMail } from 'solid-icons/ai';

type SocialLinksProps = {
  linkedinUrl: string;
  githubUrl: string;
  email: string;
};

const SocialLinks: Component<SocialLinksProps> = (props) => {
  const iconSize = 32;

  return (
    <div class="social-links">
      <a href={props.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="Robin Pedersen på LinkedIn">
        <AiFillLinkedin size={iconSize} />
      </a>
      <a href={props.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="Robin Pedersen på GitHub">
        <AiFillGithub size={iconSize} />
      </a>
      <a href={`mailto:${props.email}`} aria-label="Ta kontakt med Robin Pedersen via e-post">
        <AiFillMail size={iconSize} />
      </a>
    </div>
  );
};

export default SocialLinks;
