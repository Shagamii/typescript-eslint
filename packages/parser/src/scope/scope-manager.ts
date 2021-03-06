import { TSESTree, TSESLintScope } from '@typescript-eslint/experimental-utils';
import { EmptyFunctionScope, EnumScope } from './scopes';

/**
 * based on eslint-scope
 */
export class ScopeManager extends TSESLintScope.ScopeManager {
  scopes!: TSESLintScope.Scope[];
  globalScope!: TSESLintScope.Scope;

  constructor(options: TSESLintScope.ScopeManagerOptions) {
    super(options);
  }

  /** @internal */
  __nestEnumScope(node: TSESTree.TSEnumDeclaration) {
    return this.__nestScope(new EnumScope(this, this.__currentScope, node));
  }

  /** @internal */
  __nestEmptyFunctionScope(node: TSESTree.TSDeclareFunction) {
    return this.__nestScope(
      new EmptyFunctionScope(this, this.__currentScope, node),
    );
  }
}
