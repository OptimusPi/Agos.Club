import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { useAtomicStyles } from '../utils/styles';

export default function Footer() {
  const ac = useAtomicStyles();

  return (
    <div className={ac['footer']}>
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright '}
        {new Date().getFullYear()}
        {' © Agos.Club - Created by TickTockMan. The '}
        <Link color="inherit" href="https://agos.world/">
          Agos
        </Link>
        {' fan site.'}
      </Typography>
    </div>
  );
}
