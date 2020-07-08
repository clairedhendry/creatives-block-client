import React from 'react';
import RecentBlocks from '../RecentBlocks/RecentBlocks'

export class ScrollDrag extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.state = {
      isScrolling: false,
      clientY: 0,
      scrollY: 0,
      blocks: this.props.blocks,
    };
  }

  onMouseDown = e => {
    this.setState({ ...this.state, isScrolling: true, 
     clientY: e.clientY });
  };

  onMouseUp = () => {
    this.setState({ ...this.state, isScrolling: false });
  };

  onMouseMove = e => {
    const { clientY, scrollY } = this.state;
    if (this.state.isScrolling) {
      this.ref.current.scrollTop = scrollY + e.clientY - clientY;
      this.state.scrollY = scrollY + e.clientY - clientY;
      this.state.clientY = e.clientY;
    }
  };

  render() {
    const { ref, rootClass } = this.props;
    return (
      <div
        ref={ref}
        onMouseDown={this.onMouseDown}
        onMouseUp={this.onMouseUp}
        onMouseMove={this.onMouseMove}
        className={rootClass}
      >
        <RecentBlocks blocks={this.props.blocks} userName={null}/>
      </div>
    );
  }
}


export default ScrollDrag;