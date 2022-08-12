import {createTheme} from '@mui/material';

const btnShoppingButton = createTheme({
    components: {
      MuiButton: {
        defaultProps: {
          sx:{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '12px 24px',
            gap: '10px',
            position: 'absolute',
            width: '336px',
            height: '48px',
            left: '1172px',
            top: '405px',
            background: '#FFFFFF',
            borderRadius: '8px',
            border: '2px solid #091625',
            textTransform:'none',
            color:'#091625',
            '&:hover':{background:'#FFFFFF',border: '2px solid #091625'}
          }
        }
      }
    }
  });


  const btnProceedButton = createTheme({
    components: {
      MuiButton: {
        defaultProps: {
          sx:{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '12px 24px',
            gap: '10px',
            position: 'absolute',
            width: '336px',
            height: '48px',
            left: '1172px',
            top: '345px',
            background: '#3A4451',
            borderRadius: '8px',
            textTransform:'none',
            color:'white',
            '&:hover':{background:'#3A4451'}
          }
        }
      }
    }
  });

  const highTitle = createTheme({
    components:{
        MuiTypography:{
            defaultProps:{
                sx:{
                    fontFamily: 'Open Sans',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    fontSize: '24px',
                    lineHeight: '24px'
                }
            }
        }
    }
  });

  const smallText = createTheme({
    components:{
        MuiTypography:{
            defaultProps:{
                sx:{
                    fontFamily: 'Open Sans',
                    fontStyle: 'normal',
                    //fontWeight: '600',
                    fontSize: '14px',
                    lineHeight: '24px',
                    color: '#091625'
                }
            }
        }
    }
  });

  const mediumText = createTheme({
    components:{
        MuiTypography:{
            defaultProps:{
                sx:{
                    fontFamily: 'Open Sans',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    fontSize: '18px',
                    lineHeight: '16px',
                    color: '#091625'
                }
            }
        }
    }
  });

  const smallestText = createTheme({
    components:{
        MuiTypography:{
            defaultProps:{
                sx:{
                    fontFamily: 'Open Sans',
                    fontStyle: 'normal',
                    //fontWeight: '400',
                    fontSize: '10px',
                    lineHeight: '16px',
                    color: '#848A92',
                    
                }
            }
        }
    }
  });

  const betweenText = createTheme({
    components:{
        MuiTypography:{
            defaultProps:{
                sx:{
                    fontFamily: 'Open Sans',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    fontSize: '12px',
                    lineHeight: '16px',
                    color: '#091625',
                    
                }
            }
        }
    }
  });

  const other = createTheme({
    components:{
        MuiTypography:{
            defaultProps:{
                sx:{
                    fontFamily: 'Open Sans',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    fontSize: '16px',
                    lineHeight: '16px',
                    color: '#000000',
                    
                }
            }
        }
    }
  });

  const other2 = createTheme({
    components:{
        MuiTypography:{
            defaultProps:{
                sx:{
                    fontFamily: 'Open Sans',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    fontSize: '15px',
                    lineHeight: '16px',
                    color: '#091625',
                    
                }
            }
        }
    }
  });

  const other3 = createTheme({
    components:{
        MuiTypography:{
            defaultProps:{
                sx:{
                    fontFamily: 'Open Sans',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '14px',
                    lineHeight: '16px',
                    color: '#6B737C',
                    
                }
            }
        }
    }
  });


  export {btnShoppingButton,btnProceedButton,highTitle,smallText,mediumText,smallestText,betweenText,other,other2,other3};