import React from 'react';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import { Box, IconButton, Popover, Typography } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';

export default function InfoBox({ children, icon }) {
    return (
        <PopupState variant="popover" popupId="demo-popup-popover">
            {(popupState) => (
                <React.Fragment>
                    <IconButton
                        style={{verticalAlign: 'super', padding: 0, color: 'grey'}}
                        {...bindTrigger(popupState)}
                    >
                        { icon || <InfoIcon style={{fontSize: 13 }} /> }
                    </IconButton>
                    <Popover
                        {...bindPopover(popupState)}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                            }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                    >
                        <Box p={2}>
                        <Typography style={{
                            width: 400,
                            maxWidth: '90%',
                            fontSize: 'small'}}
                        >
                            {children}
                        </Typography>
                        </Box>
                    </Popover>
                </React.Fragment>
            )}
        </PopupState>
    );
}
