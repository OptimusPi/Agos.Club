import { colors, makeStyles } from '@material-ui/core';

export const useAtomicStyles = makeStyles((theme) => ({
  pointer: {
    cursor: 'pointer',
  },
  flex: {
    display: 'flex',
  },
  'flex-justify-space-between': {
    justifyContent: 'space-between',
  },
  'flex-justify-center': {
    justifyContent: 'center',
  },
  'flex-wrap': {
    flexWrap: 'wrap',
  },
  'flex-row': {
    flexDirection: 'row',
  },
  'flex-col': {
    flexDirection: 'column',
  },
  'flex-grow': {
    flexGrow: 1,
  },
  'flex-align-items-center': {
    alignItems: 'center',
  },
  'flex-align-items-stretch': {
    alignItems: 'stretch',
  },
  'flex-align-items-end': {
    alignItems: 'flex-end',
  },
  'flex-align-items-space-between': {
    alignItems: 'space-between',
  },
  'm-auto': {
    margin: 'auto',
  },
  'm-x': {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
  'mr-1': {
    marginRight: theme.spacing(1),
  },
  'm-1': {
    margin: theme.spacing(1),
  },
  'float-right': {
    float: 'right',
  },
  'm-2': {
    margin: theme.spacing(2),
  },
  'mb-3': {
    marginBottom: '0.75rem',
  },
  'mb-6': {
    marginBottom: '1.5rem',
  },
  'mt-3': {
    marginTop: '0.75rem',
  },
  'mt-6': {
    marginTop: '1.5rem',
  },
  'p-1': {
    padding: '.75rem',
  },
  'p-2': {
    padding: '1.5rem',
  },
  'pr-4': {
    paddingRight: '1rem',
  },
  textCenter: {
    textAlign: 'center',
  },
  'text-2xl': {
    fontSize: '1.5rem',
  },
  'font-bold': {
    fontWeight: 'bold',
  },
  'text-red-600': {
    color: colors.red[600],
  },
  'text-blue-600': {
    color: colors.blue[600],
  },
  'text-grey-500': {
    color: colors.grey[500],
  },
  'border-primary': {
    borderStyle: 'solid',
    borderColor: theme.palette.primary.main,
    borderWidth: '1px',
    borderRadius: '2px',
  },
  'w-100': {
    width: '100%',
  },
  'w-175px': {
    width: '175px',
  },
  'w-100px': {
    width: '100px',
  },
  'w-80': {
    width: '80%',
  },
  'w-98': {
    width: '98%',
  },
  'min-w-500': {
    minWidth: '500px',
  },
  'min-w-200': {
    minWidth: '200px',
  },
  'min-w-65': {
    width: '65px',
  },
  'max-w-600': {
    maxWidth: '600px',
  },
  'w-700-px': {
    width: '700px',
    minWidth: '700px',
    maxWidth: '700px',
  },
  'vertical-line': {
    borderRight: '1px solid ' + colors.blue[600],
  },
  verticalAlign: {
    verticalAlign: 'middle',
  },
  'header-icon': {
    color: theme.palette.type === 'dark' ? theme.palette.common.black : theme.palette.common.white,
  },
  italic: {
    fontStyle: 'italic',
  },
  'fab-button': {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
  },
  footer: {
    textAlign: 'center',
    bottom: 0,
    position: 'absolute',
    width: '100%',
    padding: 20,
  },
}));
