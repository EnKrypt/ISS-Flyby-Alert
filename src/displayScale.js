import { PixelRatio, Dimensions } from 'react-native';

/*
 * There's a reason why this scaling is needed. Instead of risking the
 * layout breaking on things like device DPI, Android font scaling, or
 * user defined display size; I decided it is better to lock down the
 * UI and font scaling altogether regardless of device settings.
 * Take a look at https://github.com/EnKrypt/ISS-Flyby-Alert/issues/3
 *
 * And before you say it: No. I don't see any reason why a simple app
 * like this needs to be "responsive" at all. If someone needs to run
 * this on anything other than on their phone, that is really on them.
 *
 * Took me a while to figure out the math, but it works like a charm
 * and can be re-used conveniently on future non-responsive apps.
 */

/*
 * RIP in case an Android device does not support getFontScale()
 * and instead returns the PixelRatio as per the documentation,
 * in which case the font will have weird sizes on that device.
 */

const multiplier =
    (Math.min(
        Dimensions.get('screen').height * PixelRatio.get(),
        Dimensions.get('screen').width * PixelRatio.get()
    ) /
        1080) *
    2.5;

export const getUIScale = qty => (qty / PixelRatio.get()) * multiplier;

export const getFontScale = qty =>
    (qty / PixelRatio.get() / PixelRatio.getFontScale()) * multiplier;
