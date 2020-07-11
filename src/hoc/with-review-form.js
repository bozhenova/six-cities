import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Constants } from '../constants';

const withReviewForm = Component => {
  class WithReviewForm extends PureComponent {
    static propTypes = {
      isSent: PropTypes.bool.isRequired
    };

    state = {
      rating: 0,
      comment: ``,
      isValid: false
    };

    handleTextareaChange = e => {
      this.setState({ comment: e.target.value });
    };

    onSetRating = value => {
      this.setState({ rating: value });
    };

    componentDidUpdate() {
      const { comment, rating } = this.state;
      const hasText =
        comment.length >= Constants.MIN_TEXT_LENGTH &&
        comment.length <= Constants.MAX_TEXT_LENGTH;
      const hasRating = rating > 0;

      this.setState({ isValid: hasText && hasRating });

      if (this.props.isSent) {
        this.setState({
          isValid: false,
          rating: 0,
          comment: ``
        });
      }
    }

    render() {
      return (
        <Component
          {...this.props}
          comment={this.state.comment}
          onChangeText={this.handleTextareaChange}
          onChangeRating={this.onSetRating}
          rating={this.state.rating}
          isFormValid={this.state.isValid}
        />
      );
    }
  }

  return WithReviewForm;
};

export default withReviewForm;
