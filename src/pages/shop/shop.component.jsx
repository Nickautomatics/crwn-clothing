import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {fetchCollectionsStart} from "../../redux/shop/shop.actions";
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

    componentDidMount() {
        const {fetchCollectionsStart} = this.props;
        fetchCollectionsStart();
    }

    render(){
        const {match, isCollectionFetching, isCollectionsLoaded} = this.props;

        return(
        <div className='shop-page'>
        <Route
            exact
            path={`${match.path}`}
            render={(props) => (
                <CollectionOverviewWithSpinner isLoading={isCollectionFetching} {...props} />
                )}
        />
        <Route
            path={`${match.path}/:collectionId`}
            render={(props) => (
                <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />
            )}
        />
        </div>
        )
    }
};

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching,
    isCollectionsLoaded: selectIsCollectionsLoaded
});



export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
