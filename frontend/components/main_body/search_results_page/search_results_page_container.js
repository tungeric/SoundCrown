import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchResultsPage from './search_results_page';
import { getSearchTracks } from '../../../actions/track_actions';

const mapStateToProps = (state, props) => {
  return {
    trackData: props.trackData,
    currentUser: state.session.currentUser,
    tracks: Object.values(state.tracks),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSearchTracks: (query) => dispatch(getSearchTracks(query)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchResultsPage));
