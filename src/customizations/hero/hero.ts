import Hero from '../../../node_modules/creative-patterns/packages/components/hero/src/hero';
import $ from 'jquery';

$('.cs-hero').each(function(): void {
    const hero: JQuery = $(this);
    new Hero(hero, {
        spaceBetween: 2,
        autoHeight: false,
    });
});
