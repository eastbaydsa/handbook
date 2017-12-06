import { Component } from "react";
import smoothScroll from "smooth-scroll";

class ScrollToSection extends Component {
  componentDidMount() {
    this.scrollToCurrentSection(false);

    this.props.router.onRouteChangeComplete();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.scrollToCurrentSection();
    }
  }

  scrollToCurrentSection(animate = true) {
    // if (
    //   this.props.location.state &&
    //   this.props.location.state.scroll === false
    // ) {
    //   return;
    // }
    const slug = this.props.router.pathname;
    if (slug.length === 0) {
      return;
    }
    const section = window.document.querySelector(`#${slug}`);
    if (!section) {
      return;
    }

    if (animate) {
      smoothScroll.animateScroll(section);
    } else {
      section.scrollIntoView();
    }
  }

  render() {
    return this.props.children;
  }
}

export default ScrollToSection;
