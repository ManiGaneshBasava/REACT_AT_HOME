import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Action, Dispatch } from 'redux';
import '../../../assets/scss/pages/login.scss';
import { app_actions } from '../../actions/app_actions';
import { PAGES, USERS } from '../../actions/constants';
import { api_service } from '../../api/api_service';
import appConfig from '../../config/app_config';
import { IAppStore } from './../../reducers/index';
import * as Pages from './../../router/page_constants';
import { utility } from './../../utils/index';
interface ILoginProps {
    history: any;
    match: any;
    Dispatch: Dispatch<Action>;
    isLoggedIn: boolean;
    isCollobra: boolean;
    activePage: string;
}
interface ILoginState {
    errMsg: string;
    features: Array<any>;
}
interface ILoginDetails {
    email?: string;
    password?: string;
}
class Login extends React.Component<ILoginProps, ILoginState> {

    constructor(props) {
        super(props);
        this.state = {
            errMsg: '',
            features: []
        };
    }

    public refs: {
        email: HTMLInputElement;
        password: HTMLInputElement;
    };
    payload: ILoginDetails = {
        email: '',
        password: ''
    };

    // componentWillMount() {
    //     if (this.props.isLoggedIn) {
    //         if (this.props.isCollobra) {
    //             this.props.history.push(Pages.OS);
    //         } else {
    //             if (this.props.activePage) {
    //                 this.props.history.push('/' + this.props.activePage);
    //             } else if (this.props.isLoggedIn) {
    //                 this.props.history.push(Pages.Games);
    //             } else {
    //                 this.props.history.push(Pages.Login);
    //             }
    //         }
    //     }
    // }
    static getDerivedStateFromProps(props, state) {
        if (props.isLoggedIn) {
            if (props.isCollobra) {
                props.history.push(Pages.OS);
            } else {
                if (props.activePage) {
                    props.history.push('/' + props.activePage);
                } else if (props.isLoggedIn) {
                    props.history.push(Pages.Games);
                } else {
                    props.history.push(Pages.Login);
                }
            }
        }
        return {};
    }

    errors: any = {};

    formValidations(key: string) {
        if (key === 'all') {
            this.errors = {};
        }
        if (key === 'all' || key === 'email') {
            if (!this.refs.email.value) {
                this.errors.email = 'Please enter the email.';
            } else {
                if (!utility.String.IsValidEmail(this.refs.email.value)) {
                    this.errors.email = 'Please enter the valid email.';
                } else {
                    this.payload.email = this.refs.email.value.trim();
                    delete this.errors.email;
                }
            }
        }
        if (key === 'all' || key === 'password') {
            if (!this.refs.password.value) {
                this.errors.password = 'Please enter the password.';
            } else {
                this.payload.password = this.refs.password.value.trim();
                delete this.errors.password;
            }
        }

        this.setState({});
        return Object.keys(this.errors).length === 0;
    }

    submit() {
        if (this.formValidations('all')) {
            api_service.post({
                endPoint: api_service.api_urls.LOGIN_USER,
                domain: appConfig.USERS,
                payLoad: { attributes: this.payload }
            }).then((res) => {
                if (res.data && res.data.status === 200) {
                    this.props.Dispatch(app_actions.updateAuthKey({
                        token: res.data.data.data.user_auth_token,
                        refreshToken: res.data.data.data.refreshToken,
                        timestamp: res.data.data.data.token_expiry,
                        firstName: res.data.data.data.first_name,
                        lastName: res.data.data.data.last_name,
                        userName: res.data.data.data.user_name,
                        role: res.data.data.data.role,
                        avatar: res.data.data.data.avatar,
                        developer_id: res.data.data.data.developer_id
                    }));
                    this.storeLoginRoleFeatures(res);

                } else {
                    if (res.data.data === 'WRONG-CREDENTIALS' || res.data.data === 'USER-STATUS-INACTIVE') {
                    }
                    this.setState({ errMsg: res.data.data });
                }
                this.setState({});
            }).catch(err => {
                utility.alert({ message: err.message });
            });
        }
    }
    ILoginProps
    storeLoginRoleFeatures(res) {
        api_service.get({
            endPoint: api_service.api_urls.FEATURE_LIST_BY_TOKEN,
            domain: appConfig.USERS
        }).then((resp) => {
            if (resp.data.message === 'GET-ROLE-FEATURE-SUCCESS' && resp.data.status === 200) {
                let featuresList = [];
                // Adding all side menu features User Role wise in reducer
                resp.data.data.map((eachfeature) => {
                    featuresList.push(eachfeature.features.name);
                });
                /*
                If the list page is allowed than,
                adding Detail pages in allowed routing manually
                Need to write same code in Manage accounts, in settings
                */
                if (featuresList.includes(Pages.Games.split('/')[1])) {
                    featuresList.push(Pages.GameDetailsPage.split('/')[1]);
                }
                if (featuresList.includes(Pages.Apps.split('/')[1])) {
                    featuresList.push(Pages.AppsDetailsPage.split('/')[1]);
                }
                if (featuresList.includes(Pages.PromotionalItems.split('/')[1])) {
                    featuresList.push(Pages.PromoDetailsPage.split('/')[1]);
                }
                if (featuresList.includes(Pages.VCSUsers.split('/')[1])) {
                    featuresList.push(Pages.VCSUserDetailsPage.split('/')[1]);
                }
                if (featuresList.includes(Pages.PromocodeList.split('/')[1])) {
                    featuresList.push(Pages.PromocodeDetailsPage.split('/')[1]);
                }
                if (featuresList.includes(Pages.NotificationList.split('/')[1])) {
                    featuresList.push(Pages.NotificationDetailsPage.split('/')[1]);
                }
                /* Adding reports modules manually if reports module allowed
                    Need to write same code in Manage accounts, in settings
                */
                if (featuresList.includes('reports')) {
                    featuresList.splice(featuresList.length - 1, 0,
                        Pages.ProductPurchaseList.split('/')[1],
                        Pages.ProductUploadList.split('/')[1],
                        Pages.UserReportList.split('/')[1],
                        Pages.ProductReportList.split('/')[1]
                    );
                };
                /* Adding settings modules if settings allowed from backend
                   Need to write same code in Manage accounts, in settings
               */
                //Since, manage-accounts is by default feature for all kind of roles
                featuresList.push(Pages.ManageAccounts.split('/')[1]);
                if (featuresList.includes('settings')) {
                    featuresList.splice(featuresList.length - 1, 0,
                        Pages.UserRoles.split('/')[1],
                        Pages.ContentManagement.split('/')[1],
                        Pages.ReportSettings.split('/')[1],
                        Pages.ManageDevelopers.split('/')[1],
                        Pages.ManageHUDMenu.split('/')[1],
                        Pages.ManagePolicies.split('/')[1],
                        Pages.DefaultProduct.split('/')[1],
                        Pages.ProductInfo.split('/')[1],
                        Pages.ProductInfoDetail.split('/')[1]
                    );
                };
                this.props.Dispatch(app_actions.updateAuthKey({
                    token: res.data.data.data.user_auth_token,
                    refreshToken: res.data.data.data.refreshToken,
                    timestamp: res.data.data.data.token_expiry,
                    firstName: res.data.data.data.first_name,
                    lastName: res.data.data.data.last_name,
                    userName: res.data.data.data.user_name,
                    role: res.data.data.data.role,
                    avatar: res.data.data.data.avatar,
                    features: featuresList,
                    environment: res.data.data.environment,
                    developer_id: res.data.data.data.developer_id
                }));
                // If Games is there in the allowed list than open it by default
                if (featuresList.indexOf('games') !== -1) {
                    this.props.Dispatch(app_actions.activeTab(''));
                    this.props.Dispatch(app_actions.selectedPage('games'));
                    this.props.history.push(Pages.Games);
                } else {
                    // else use the 1st item from the allowed list
                    let temp = PAGES;
                    for (let i = 0; i < temp.length; i++) {
                        if (temp[i].key === featuresList[0]) {
                            this.props.Dispatch(app_actions.activeTab(''));
                            this.props.Dispatch(app_actions.selectedPage(temp[i].key));
                            this.props.history.push('/' + temp[i].key);
                            break;
                        }
                    }
                }
            }
        }).catch((err) => {
            utility.alert({ message: err.message });
        });
    }

    jwtDecode(token: string) {
        token = token.split('.')[1];
        let userDetails: any = JSON.parse(window.atob(token));
        return userDetails;
    }

    _handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.submit();
        }
        if (e.key === ' ') {
            e.preventDefault();
        }
    }

    render() {
        return (
            <div className='login-page'>
                <div className='atari-top'>
                    <img src={require('../../../assets/images/atari-login-logo.png')} alt='Atari Logo' />
                </div>
                <div className='atari-signin'>
                    <h1>SIGN IN</h1>
                    {<span className='login-error_msg'>{this.state.errMsg ? this.state.errMsg : ''}</span>}
                    <div className='input_in'>
                        <input type='text' placeholder=' ' className='form-control login_inputs' ref='email' onBlur={this.formValidations.bind(this, 'email')} required />
                        <span className='floating_label'>Email*</span>
                        <span className='error_msg'>{this.errors.email ? this.errors.email : ''}</span>
                    </div>
                    <div className='input_in'>
                        <input type='password' placeholder=' ' className='form-control login_inputs' ref='password' onKeyPress={this._handleKeyPress} onBlur={this.formValidations.bind(this, 'password')} required />
                        <span className='floating_label'>Password*</span>
                        <span className='error_msg'>{this.errors.password ? this.errors.password : ''}</span>
                    </div>
                    <button className='filled_btn sign-in' onClick={this.submit.bind(this)}>SIGN IN</button>
                    <p className='forgot-pwd'><button onClick={() => { this.props.history.push(Pages.ForgotPassword); }}>Forgot Password?</button></p>
                </div>
            </div>
        );
    }
}

function mapStoreToProps(store: IAppStore): Partial<ILoginProps> {
    return {
        isLoggedIn: store.App.userDetails.Token ? true : false,
        isCollobra: store.App.userDetails.role === USERS.COLLOBRA ? true : false,
        activePage: store.App.activePage
    };
}

export default withRouter(connect(mapStoreToProps, utility.mapDispatchToProps)(Login));