/**
 * Created by Tore Julø on 10/01/15.
 *
 * @ngdoc directive
 * @name biteSrcset
 * @restrict A
 * @priority 99
 *
 * @description
 * Even though the default Angular directive ngSrcset is useful for setting
 * `srcset` attribute on an image, manually putting in every image and
 * imagewidth can be a hazzle.
 *
 * To create an image with a srcset, simply use `bite-srcset` instead of
 * `ng-srcset` and set the image object as the attribute value.
 * `biteSrcset` will automatically fill in the `src` and `srcset` values, though
 * you'll still have to manually enter the `sizes` attribute.
 *
 * Being an attribute directive, you can still use any ID or class on the `img`
 * element.
 *
 * @element IMG
 * @param {object=} biteSrcset takes the image object, containing the various
 * file sizes.
 */
'use strict';

app.directive('biteSrcset', function () {
    return {
        restrict: 'A',
        priority: 99,
        scope: {
            bitesrc: '=biteSrcset'
        },
        link: function (scope, element, attr) {
            var a = '';
            var watcher = scope.$watch('bitesrc', function (data) {
                if (data) {
                    if (typeof (data.images) !== 'undefined') {
                        a += data.images.desktop.url + ' 1x,';
                        if (data.images.desktop2x) {
                            a += data.images.desktop2x.url + ' 2x,';
                        }
                        if (data.images['desktop@2x']) {
                            a += data.images['desktop@2x'].url + ' 2x,';
                        }
                        for (var el in data.images) {
                            a += data.images[el].url + ' ' + data.images[el].width + 'w,';
                        }
                        attr.$set('srcset', a);
                        attr.$set('src', data.images.desktop2x.url);

                        // By calling the watch function, the watch is destroyed.
                        watcher();
                    } else if (data.image && typeof data.image === 'string') {
                        attr.$set('src', data.image);
                    }
                }
            });
        }
    };
});
