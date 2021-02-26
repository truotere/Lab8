const formatVolumeIconPath = require('../assets/scripts/main');

// Format path of volume icon depending on volume value input
describe('format volume icon path', () => {

    // Branch volumeValue > 66
    test('take volumeValue 80 to return iconLevel 3', () => {
        expect(formatVolumeIconPath(80)).toContain(`./assets/media/icons/volume-level-3.svg`);
    });

    // Branch volumeValue > 33
    test('take volumeValue 44 to return iconLevel 2', () => {
        expect(formatVolumeIconPath(44)).toContain(`./assets/media/icons/volume-level-2.svg`);
    });

    // Branch volumeValue > 0
    test('take volumeValue 6 to return iconLevel 1', () => {
        expect(formatVolumeIconPath(6)).toContain(`./assets/media/icons/volume-level-1.svg`);
    });

    // Branch volumeValue = 0
    test('take volumeValue 0 to return iconLevel 0', () => {
        expect(formatVolumeIconPath(0)).toContain(`./assets/media/icons/volume-level-0.svg`);
    });

});
