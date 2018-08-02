import { connect } from 'react-redux';

import * as Actions from './types';
import CounterComponent from '../components/CounterComponent';

const mapStateToProps = (state) => ({
     count: state.counterReducer.count
});

const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch({type: Actions.COUNTER_INCREMENT}),
    decrement: () => dispatch({type: Actions.COUNTER_DECREMENT}),
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);
